'use client'
import React, { useEffect, useState } from 'react'
import Accountnav from '@/components/Accountnav'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '@/features/authSlice'
 

import axios from 'axios';
function Page() {
  const API_URL = process.env.API_URL || "";
  const { users, isError, isSuccess, isLaoding, loginTimestamp } =
    useSelector((state) => state.auth);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New passwords don't match");
      return;
    }

    try {
      const response = await axios.put(API_URL + '/api/change-password', {
        currentPassword,
        newPassword,
      }, {
        headers: {
          "Authorization": `Bearer ${users?.token}`
        }
      });

      if (response.data.success) {
        setMessage('Password changed successfully');
      } else {
        setMessage('Error changing password');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error changing password');
    }
  };

  return (
    <>
      <Accountnav active={"Password"} />
      <div className="my-account-address pb-5">
        <div className="container">
          
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className='col-lg-4'>
                <label>Current Password:</label>
                <input
                  type="password"
                   className='form-control'
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
              <div className='col-lg-4'>
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                   className='form-control'
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className='col-lg-4'>
                <label>Confirm New Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                   className='form-control'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-12 mt-3">
              <button type="submit " className='woocommerce-Button'>Change Password</button>
              </div>
              {message && <p>{message}</p>}
              </div>
            </form>
         
          </div></div>
    </>
  );
}

export default Page