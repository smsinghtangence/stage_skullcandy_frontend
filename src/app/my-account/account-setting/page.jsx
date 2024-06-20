'use client'
import React, { useEffect, useState } from 'react'
import Accountnav from '@/components/Accountnav'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
function page() {

  
// const router = useRouter();
const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
useSelector((state) => state.auth);

const [shipping, setShipping] = useState({
  first_name: '',
  last_name: '',
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  postcode: "",
  country: "INDIA",
  phone: "",
  Company_Name:users?.Company_Name?users?.Company_Name:"",
  GSTIN:users?.GSTIN?users?.GSTIN:""

})
const [errors, setErrors] = useState({});
const handleChange = (e) => {
  e.preventDefault()
  // console.log("target "+ e.target.name +" valye "+ e.target.value)
  setShipping({ ...shipping, [e.target.name]: e.target.value })

  console.log(" s " + JSON.stringify(shipping)) 
}
  return (
    <>
    <Accountnav/>
  
  <form>

  <div className="row">
          <div className="col-lg-6">
            <input
              required
              type="text"
              placeholder='User name'
              className='form-control'
              name='user_name'
              value={users?.username}
              onChange={handleChange}
            />
            <span className="text-danger">
              {errors[`shippingfirst_name`]}

            </span>
          </div>
  </div>
  <div className="row">
          <div className="col-lg-6">
            <input
              required
              type="text"
              placeholder='First name'
              className='form-control'
              name='first_name'
              value={shipping["first_name"]}
              onChange={handleChange}
            />
            <span className="text-danger">
              {errors[`shippingfirst_name`]}

            </span>
          </div>
  </div>

        <div className="row">
          <div className="col-lg-12">
            <input
              required
              type="text"
              placeholder='Email'
              className='form-control'
              value={users?.email}
              onChange={(e) => { setEmail(e.target.value) }} />
            <span className="text-danger">{errors[`shippingemail`]}</span>
          </div>
        </div> 
  </form>

    </>
  )
}

export default page