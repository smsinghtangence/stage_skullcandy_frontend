'use client'
import React from 'react'
 
// import { useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getCartData } from '@/features/Cart/cartnWishSlice'
import { useDispatch, useSelector } from 'react-redux'
import { payWithCardReset, reset, resetAllState } from '@/features/CheckOut/checkOutSlice'
import OrderSummary from '@/components/OrderSummary'
import axios from "axios";
import CryptoJS from "crypto-js"
import { useRouter } from 'next/navigation'
import { getDataWithQuery,geturl } from "@/utils/api"


function page({params}) {
  const API_URL = process.env.API_URL
const TOKEN = process.env.TOKEN || '';
    // const navigate = useNavigate()
    const router = useRouter();
    const dispatch = useDispatch()
    const {users} = useSelector(state=>state.auth)
    const {isLoading} = useSelector(state=>state.checkOut)
    window.scrollTo(0,0)
////

const id = params.id;
// console.log("orderid "+id)
         
var ciphertext = id?.replace(/p1L2u3S/g, '+' )?.replace(/s1L2a3S4h/g, '/')?.replace(/e1Q2u3A4l/g, '=');
var bytes = CryptoJS.AES.decrypt(ciphertext, '');

 

var decrypted_Orderid= bytes.toString(CryptoJS.enc.Utf8);
 

// const queryParams = new URLSearchParams(window.location.search);

// const orderid = queryParams.get("orderid") ? queryParams.get("orderid") : '';
// console.log(orderid);
const [order, setOrder] = useState({});
const [product,setProducts] = useState();
const getorder = async () => {

  
  let config = {
    headers: {
      "Authorization": `Bearer ${TOKEN}`
    },
  };

  
  // API_URL + `/api/orders/${decrypted_Orderid}`,
  const response = await axios.get(
    API_URL + `/api/orders/${decrypted_Orderid}?populate=*`,
    config
  );
  if (response.status == 200) {
    setOrder(response?.data?.data?.attributes);
    // console.log("response.data", response?.data?.data?.attributes);


  

  const productIdsString = response?.data?.data?.attributes?.line_items?.map((productId,i) => {
    return `&filters[$or][${i}][id][$eq]=${productId.product_id}`;
  }).join('');

    const response_product = await axios.get(
      API_URL + `/api/products/?populate[1]=image,Variation_Sliders.Desktop_Image,Variation_Sliders.Mobile_Image,Content_Section.Desktop_Image&populate[0]=image,Variation_Sliders${productIdsString}`,
      config
    );
    if (response_product.status == 200) {
    setProducts(response_product?.data?.data)

    // console.log("response_product.data", response_product?.data?.data);
    
    }
  }
   
};
//////
    useEffect(()=>{
      // if(users?.id){
      //   dispatch(getCartData());
       
      // }
      dispatch(payWithCardReset())
      dispatch(reset())
      dispatch(resetAllState())
      getorder();
    },[])

    let total = 0;

  return (
    <>
    <div className='container py-5 '>
     <div className="d-flex align-items-center justify-content-center flex-column text-center gap-2">
     
     <h3>We Have Received Your Order</h3>
     </div>
     </div>
   



     <section className="shipping-addres">
     <div className="container ">
  <h2>Order Detail</h2>
 
  <table className="table table-bordered">
     
    <tbody>
    <tr>
        <td><strong> Full Name</strong> </td>
        <td>{order?.shipping?.first_name}  {order?.shipping?.last_name}</td>  
      </tr>
      <tr>
        <td><strong> Address</strong> </td>
        <td>{order?.shipping?.address_1},  {order?.shipping?.address_2}, {order?.shipping?.state} ,{order?.shipping?.city}, {order?.shipping?.postcode}</td>  
      </tr>
      <tr>
        <td><strong> Payment Method</strong> </td>
        <td>{order?.payment_method_title}</td>  
      </tr>
      <tr>
        <td><strong>Order Id</strong></td>
        <td>#{order?.order_id}</td>  
      </tr>
      {order?.payment_method !="cod" &&
      <tr>
        <td><strong>Payment Id</strong></td>
        <td>#{order?.payment_id}</td>  
      </tr>
      }
    {order?.line_items  &&  
    <>
    <tr > 
    <td colspan={2}>
     {/*  */}
      <table className='table table-bordered w-100'>
    <thead>
      <tr>
        <th>SrNo</th>
        <th>Image</th>
        <th>Name</th>
        {/* <th>Product Id</th> */}
        <th>Quantity</th>
        <th>SKU</th>
        <th>Price</th>
      
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
     {order?.line_items?.map((item,i) => {
     
      
     
     const quantity = item?.quantity;
     const price = item?.Sales_price ? item?.Sales_price : item?.Variations_Price  
      total = total + ( quantity * price);
       

      return (
      <>
      
    
      <tr>
        <td>{i+1} </td>
        <td><img width={60} height={60} src={item?.Variant_Image_url}/> </td>
        <td><a href={`/shop/${item?.slug}`} >{item?.name}</a></td>
        {/* <td>{item?.product_id} </td> */}
        <td>{quantity} </td>
        <td>{item?.SKU} </td>
        <td><i className="fa fa-rupee"></i>{price} </td>
   
        <td><i className="fa fa-rupee"></i>{ quantity * price} </td>
        
        
      </tr>
    
      
   
    </>
     )})}
       <tr>
        <td colSpan={6} style={{textAlign:"right"}}><strong>Discount</strong></td>
        <td>{order?.discount_total}</td>
      </tr>
       {/* shipping cost */}
       {order?.shipping_total  &&
      <tr>
        <td colSpan={6} style={{textAlign:"right"}}><strong>Shipping Cost</strong></td>
        <td>{order?.shipping_total}</td>
      </tr>
      }
      {/*  */}
      <tr>
        <td colSpan={6} style={{textAlign:"right"}}><strong>Total</strong></td>
        <td><i className="fa fa-rupee"></i>{total}</td>
      </tr>
     </tbody>
     
    </table>

     {/*  */}
     </td>
     </tr>
      
      
      </>
      }
      
      
    </tbody>
  </table>
  {/* <button className='add-to-cart border-0 mt-3 mx-auto' onClick={()=>{router.push('/')}}>Back</button> */}
</div>
     </section>


  

   

     </>
  )
}

export default page
