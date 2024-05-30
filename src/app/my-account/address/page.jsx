"use client"
import Link from 'next/link'
import React from 'react'
import Accountnav from '@/components/Accountnav'
import { useDispatch, useSelector } from "react-redux";
function page() {

  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
useSelector((state) => state.auth);


  return (
    <>
          <Accountnav/>
          
        <div className="my-account-address pb-5">
          <div className="container">
          <p>The following addresses will be used on the checkout page by default.</p>
            <div className="row">

              <div className="col-lg-6">
                <h4>Billing address</h4>
                <div className="address-blk">
                 <p> You have not set up this type of address yet.</p>
                </div>
              </div>

              
              <div className="col-lg-6">
                <h4>Shipping address</h4>
                <div className="address-blk">
                 <p> You have not set up this type of address yet.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default page