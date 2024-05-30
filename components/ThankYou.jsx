import React from 'react'
import you from '@/images/Group 6386.svg'
// import { useNavigate,useParams } from 'react-router-dom'
import { useRouter } from 'next/navigation'

import { useState,useEffect } from 'react'
import { getCartData } from '@/features/Cart/cartnWishSlice'
import { useDispatch, useSelector } from 'react-redux'

import { payWithCardReset, reset, resetAllState } from '@/features/CheckOut/checkOutSlice'
import OrderSummary from '@/components/OrderSummary'
import axios from "axios";
import CryptoJS from "crypto-js"
function ThankYou() {
    // const navigate = useNavigate()
    const router = useRouter();
    const dispatch = useDispatch()
    const {users} = useSelector(state=>state.auth)
    const {isLoading} = useSelector(state=>state.checkOut)
    window.scrollTo(0,0)
////

// const {id} = useParams();
const {id} = "";
// console.log("orderid"+id)
var ciphertext = id?.replace(/p1L2u3S/g, '+' )?.replace(/s1L2a3S4h/g, '/')?.replace(/e1Q2u3A4l/g, '=');
var bytes = CryptoJS.AES.decrypt(ciphertext, '');

 

var decrypted_Orderid= bytes.toString(CryptoJS.enc.Utf8);
// console.log("decrypt"+decrypted_Orderid)

// const queryParams = new URLSearchParams(window.location.search);

// const orderid = queryParams.get("orderid") ? queryParams.get("orderid") : '';
// console.log(orderid);
const [order, setOrder] = useState([]);
 
const getorder = async () => {

  
  let config = {
    headers: {
      // "consumer-secret": process.env.VITE_SECRET,
      // "consumer-key": process.env.VITE_KEY,
    },
  };
  const response = await axios.get(
     process.env.VITE_API_URL+`/wc/v3/orders/${decrypted_Orderid}`,
    config
  );
  if (response.status == 200) {
    setOrder(response.data);
  }
  console.log("response.data", response.data);
};
//////
    useEffect(()=>{
      if(users?.id){
        dispatch(getCartData());
       
      }
      dispatch(payWithCardReset())
      dispatch(reset())
      dispatch(resetAllState())
      getorder();
    },[])
    
  return (
    <>
    <div className='container py-5 '>
     <div className="d-flex align-items-center justify-content-center flex-column text-center gap-2">
     <img src={you} width={'30%'}/>
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
        <td>#{order?.id}</td>  
      </tr>
    {order?.line_items  &&  
    <>
    <tr > 
    <td colspan={2}>
     {/*  */}
      <table className='table table-bordered w-100'>
    <thead>
      <tr>
        <th>SNo</th>
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
     {order?.line_items?.map((item,i) => (
      <>
      
    
      <tr>
        <td>{i+1} </td>
        <td><img width={60} height={60} src={item?.image?.src}/> </td>
        <td><a href={`/productDetail/${item?.product_id}`} >{item?.name}</a></td>
        {/* <td>{item?.product_id} </td> */}
        <td>{item?.quantity} </td>
        <td>{item?.sku} </td>
        <td>{item?.price} </td>
   
        <td>{item?.total} </td>
        
        
      </tr>
    
      
   
    </>
     ))}
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
        <td>{order?.total}</td>
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
  <button className='add-to-cart border-0 mt-3 mx-auto' onClick={()=>{ router.push('/')}}>Back</button>
</div>
     </section>


  

   

     </>
  )
}

export default ThankYou
