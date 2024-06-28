'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Accountnav from '@/components/Accountnav'
import { getDataWithQuery, geturl } from "@/utils/api"
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'


const page = ({params}) => {
  const API_URL =  process.env.API_URL || '';
  const id = params?.id
  const [data, setData] = useState();  
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
  useSelector((state) => state.auth);
  
  
 
useEffect(() => {
  
  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL +`/api/orders?filters[customer_id][$eq]=${users?.id}&filters[id]=${id}&populate=*`, {headers: {
        "Authorization": `Bearer ${users?.token}`
         
      }});
      setData(response?.data?.data);
      console.log(response?.data?.data)
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  fetchOrders();


  }, []);
  const item = data?.[0]?.attributes
  let total = 0

  const date = new Date(item?.createdAt);

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  // Format the date
  const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <>
     <Accountnav active={"Orders"}/>  

    <div className="container">
      <div className="row">
      <div className="col-12">
        <p>Order #{data?.[0]?.id} was placed on {formattedDate} and is currently {item?.status}.
      </p>
      <h2 className='pt-5 pb-5'>Order Detail</h2>
      </div>
      </div>
    
      
     







      <div className='table-responsive'>
      <table className='table table-stripped'>
          <tr>
            <th>Sl.No</th>
            <th>Description</th>
            <th>Image</th>
            <th>Unit Price </th>
            
            <th>Qty </th>
            
            <th>Total Amount</th>
            
          </tr>
          {(data?.length > 0) 
        
        
        ?<>
        {item?.line_items?.map((product,key) => {
          
          let price = product?.Sales_price ? product?.Sales_price : product?.Variations_Price;
          let quantity = product?.quantity
          let netprice = quantity * price
          total = total + netprice
          return (
         
           
          <tr>
            <td>{key + 1 }</td>
          <td>
            <p>{product?.name} - {product?.Variations_Color_Name}</p>
            <p>{product?.SKU}</p>


          </td>
            <td><div className="cpl-img"> <Link href={`/shop/${product?.slug}`}><img className='' src={product?.Variant_Image_url}/></Link></div></td>
             
            <td><i class="fa fa-rupee"></i>{price}</td>
            <td>{quantity}</td>
            <td><i class="fa fa-rupee"></i>{netprice}</td>
            
            
          </tr>
          )}
         )}
         <tr>
          <td colSpan={3}></td>
          <td colSpan={2}>Total</td>
         <td  ><i class="fa fa-rupee"></i>{total}</td></tr>
        </>
        :""
        }
        
         
         
      </table>
     </div>
  
     <div className="row">
        <div className="col-6">
        <div className='bg-grey'>
          <h2>Billing Address</h2>
          <p>{item?.billing?.first_name} {item?.billing?.last_name}</p>
          <p>{item?.billing?.address_1} ,{item?.billing?.address_2}</p>
          <p>{item?.billing?.city}, {item?.billing?.state}, {item?.billing?.postcode} </p>
          <p>{item?.billing?.country}</p>
          </div>
        </div>
        {/*  */}

        <div className="col-6">
        <div className='bg-grey'>
          <h2>Shipping Address</h2>
          <p>{item?.shipping?.first_name} {item?.shipping?.last_name}</p>
          <p>{item?.shipping?.address_1} ,{item?.shipping?.address_2}</p>
          <p>{item?.shipping?.city}, {item?.shipping?.state}, {item?.shipping?.postcode} </p>
          <p>{item?.shipping?.country}</p>
          </div>
        </div>
        {/*  */}

      </div>


      <div className="row">
        <div className="col-6">
          <div className='bg-grey'>
        <p>Order Status: {item?.status}</p>
        <p>Payment Method: {item?.payment_method}</p>
          <p>Order Id: {item?.order_id}</p>
          <p>Payment Id: {item?.payment_id}</p>
          <p>Order Date: {formattedDate}</p>
          </div>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default page;
