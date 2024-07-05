'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Accountnav from '@/components/Accountnav'
import { getDataWithQuery, geturl } from "@/utils/api"
import { useDispatch, useSelector } from "react-redux";
const Page = () => {
  const API_URL =  process.env.API_URL || '';
  const [data, setData] = useState();  
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
  useSelector((state) => state.auth);
  
  
 
useEffect(() => {
  
  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL +`/api/users/me?populate=*`, {headers: {
        "Authorization": `Bearer ${users?.token}`
         
      }});
      setData(response?.data);
      console.log(response?.data)
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  fetchOrders();


  }, []);
  
  return (
    <>
         <Accountnav active={"Addresses"}/>
          
        <div className="my-account-address pb-5">
          <div className="container">
          <p>The following addresses will be used on the checkout page by default.</p>
            <div className="row">

              <div className="col-lg-6">
                <h4>Address</h4>
                <div className="address-blk">
                 {data?.Address[0] ?
                  <table className='table table-stripped'>
          <thead>
          <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Address</th>
          </tr>
          </thead>
                    <tbody>
                      <tr >

                        <td> {data?.Address[0]?.first_name}&nbsp;{data?.Address[0]?.last_name}</td>
                        <td>{data?.Address[0]?.mobile}</td>
                        <td> {data?.Address[0]?.address_1}, {data?.Address[0]?.address_2} {data?.Address[0]?.city}, {data?.Address[0]?.state}, {data?.Address[0]?.country}</td>
                      </tr>

                    </tbody>
             
           

          </table>
                  :
                 <p> You have not set up this type of address yet.</p>
                 }
                 </div>
              </div>

              
              {/* <div className="col-lg-6">
                <h4>Shipping address</h4>
                <div className="address-blk">
                 <p> You have not set up this type of address yet.</p>
                </div>
              </div> */}

            </div>
          </div>
        </div>
    </>
  )
}

export default Page