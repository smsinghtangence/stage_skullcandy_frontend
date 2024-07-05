'use client'
import React, { useEffect, useState } from 'react'
import Accountnav from '@/components/Accountnav'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '@/features/authSlice'
import { toast } from 'react-toastify'

import axios from 'axios';
function Page() {

  const API_URL = process.env.API_URL || "";
  // const router = useRouter();
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
    useSelector((state) => state.auth);
    const dispatch = useDispatch()
  const [shipping, setShipping] = useState({
    first_name: users?.first_name ? users?.first_name : "",
    last_name: users?.last_name ? users?.last_name : "",
    mobile: users?.mobile ? users?.mobile : "",
    Company_Name: users?.Company_Name ? users?.Company_Name : "",
    GSTIN: users?.GSTIN ? users?.GSTIN : ""

  })
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    e.preventDefault()
    // console.log("target "+ e.target.name +" valye "+ e.target.value)
    setShipping({ ...shipping, [e.target.name]: e.target.value })

    console.log(" s " + JSON.stringify(shipping))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validations

    let isValid = true;
    const newErrors = {};

    console.log(" shipping " + JSON.stringify(shipping["first_name"]))

    ///////////

    if (!shipping["first_name"] || shipping["first_name"].length > 10) {
      newErrors[`shippingfirst_name`] = 'First name is required and should be 10 characters or less';

      isValid = false;

    } else if (!/^[a-zA-Z]*$/.test(shipping["first_name"])) {
      newErrors[`shippingfirst_name`] = 'Name should  only contain letters';
      isValid = false;
    } else {
      newErrors[`shippingfirst_name`] = '';
    }

    // ////////last_name////
    if (!shipping["last_name"] || shipping["last_name"].length > 10) {
      newErrors[`shippinglast_name`] = 'Last name is required and should be 10 characters or less';

      isValid = false;

    } else if (!/^[a-zA-Z]*$/.test(shipping["last_name"])) {
      newErrors[`shippinglast_name`] = 'Name should  only contain letters';
      isValid = false;
    } else {
      newErrors[`shippinglast_name`] = '';
    }
    if (!shipping["mobile"] || shipping["mobile"].length !== 10 || isNaN(shipping["mobile"])) {
      newErrors[`shippingmobile`] = 'Enter a valid 10-digit mobile number';
      isValid = false;
    } else {
      newErrors[`shippingmobile`] = '';
    }
    ////////////




    setErrors(newErrors);

    if (!isValid) {
      return;
    }
    if (!isValid) {
      return;
    }

    // console.log(shipping)
    // dispatch(addshipping(shipping))

    // dispatch(addShippingDetails(shipping))

    if (users?.id) {


      // const res = await axios.put(API_URL + `/api/users/${users.id}`, { ...shipping }, {
      //   headers: {
      //     "Authorization": `Bearer ${users?.token}`
      //   }
      // })

      dispatch(updateUser(shipping))
      toast.success('Update Successfully')

    }


  }



  return (
    <>
      <Accountnav active={"Settings"} />
      <div className="my-account-address pb-5">
      <form onSubmit={handleSubmit}>
      <div className="form-delivery">
        <div className="container">
          <div className="row">
         
              
                <div className="col-lg-12 form-group form-group">
                  <label>First Name</label>
                  <input

                    type="text"
                    placeholder='First Name'
                    className='form-control'
                    name='first_name'
                    value={shipping["first_name"]}
                    onChange={handleChange}
                  />
                  <span className="text-danger">
                    {errors[`shippingfirst_name`]}

                  </span>
                </div>

                <div className="col-lg-12 form-group">
                  <label>Last Name</label>
                  <input

                    type="text"
                    placeholder='Last Name'
                    className='form-control'
                    name='last_name'
                    value={shipping["last_name"]}
                    onChange={handleChange}
                  />
                  <span className="text-danger">
                    {errors[`shippinglast_name`]}

                  </span>
                </div>

                <div className="col-lg-12 form-group">
                <label>Mobile</label>
                  <input
                    required
                    className='form-control' placeholder='mobile'
                    type="number" value={shipping["mobile"]} name='mobile'
                    maxLength={10}
                    onChange={handleChange} />
                  <span className="text-danger">{errors[`shippingmobile`]}</span>
                </div>


                <div className="col-lg-12 form-group">
                  <label>Email</label>
                  <input
                    disabled
                    type="text"
                    placeholder='Email'
                    className='form-control'
                    value={users?.email}
                  // onChange={(e) => { setEmail(e.target.value) }} 
                  />
                  {/* <span className="text-danger">{errors[`shippingemail`]}</span> */}
                </div>
                <div className="col-lg-12 form-group">
                  <label>User name</label>
                  <input
                    disabled
                    type="text"
                    placeholder='User name'
                    className='form-control'
                    name='user_name'
                    value={users?.username}
                  // onChange={handleChange}
                  />
                  {/* <span className="text-danger"> */}
                  {/* {errors[`shippingfirst_name`]} */}

                  {/* </span> */}
                </div>

                <div className="col-lg-12 form-group">
                  <label>Company Name</label>
                  <input

                    type="text"
                    placeholder='Company Name'
                    className='form-control'
                    name='Company_Name'
                    value={shipping["Company_Name"]}
                    onChange={handleChange}
                  />
                  <span className="text-danger">
                    {errors[`shippingCompany_Name`]}

                  </span>
                </div>

                <div className="col-lg-12 form-group">
                  <label>GSTIN</label>
                  <input

                    type="text"
                    placeholder='GSTIN'
                    className='form-control'
                    name='GSTIN'
                    value={shipping["GSTIN"]}
                    onChange={handleChange}
                  />
                  <span className="text-danger">
                    {errors[`shippingGSTIN`]}

                  </span>
                </div>

                <div className="col-lg-12 form-group">
                  <input type='submit' value={"submit"} />
                </div>
            </div>


          
        </div>
      </div>
      </form>
      </div >
    </>
  )
}

export default Page