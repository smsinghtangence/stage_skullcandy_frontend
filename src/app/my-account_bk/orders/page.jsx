'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Accountnav from '@/components/Accountnav'
import { getDataWithQuery, geturl } from "@/utils/api"
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'


const page = () => {
  const API_URL =  process.env.API_URL || '';
  const [data, setData] = useState();  
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
  useSelector((state) => state.auth);
  
  
 
useEffect(() => {
  
  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL +`/api/orders?filters[customer_id][$eq]=${users?.id}&populate=*`, {headers: {
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
  
  return (
    <>
    <Accountnav active={"Orders"}/> 

    <div className="container">
      <h1>User Orders</h1>
      <div className='table-responsive'>
      <table className='table table-stripped'>
          <tr>
            <th>Order</th>
            <th>Date</th>
            {/* <th>Payment Id </th>
            <th>Order Id </th> */}
            <th>Status </th>
            <th>Total </th>
            <th>Action </th>
            
          </tr>
        {(data?.length > 0) 
        
        
        ?<>{data?.map(item => 
          
          {
            const date = new Date(item?.attributes?.createdAt);

// Options for formatting the date
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

// Format the date
const formattedDate = date.toLocaleDateString('en-US', options);

          
          return (
          <tr>
            <td><Link href={"/my-account/orders/"+item?.id}>#{item?.id}</Link></td>
            <td>{formattedDate}</td>
            {/* <td>{item?.attributes?.payment_id}</td>
            <td>{item?.attributes?.order_id}</td> */}
            <td>{item?.attributes?.status}</td>
            <td><i class="fa fa-rupee"></i> {item?.attributes?.amount?.toLocaleString()}</td>
           <td><Link href={"/my-account/orders/"+ item?.id}
           className='myacc_order_btn'
           >View</Link></td>
          </tr>
        )}
        )}
        </>
        :""
        }
      </table>
     </div>
  
     {(data?.length > 0) ? "" :
    <div className="woocommerce-MyAccount-content">
      <div className="woocommerce-notices-wrapper " />
      <div className="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info order-row">
        <Link
          className="woocommerce-Button button"
          href="/shop"
        >
          Browse products
        </Link>
        No order has been made yet.{" "}
      </div>
    </div>
      }
    </div>
    </>
  );
};

export default page;
