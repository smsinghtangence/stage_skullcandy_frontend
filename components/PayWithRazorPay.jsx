'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
 
import { toast } from 'react-toastify';
import { updateOrderAfterPayment, reset, payWithCardReset, orderReset, setPyamentRazorpayStatus } from '@/features/CheckOut/checkOutSlice';

import { reset as cartReset, deleteAllItemsFromCart } from '@/features/Cart/cartnWishSlice'
import PaymentMethod from './PaymentMethod';


function PayWithRazorPay() {
  const dispatch = useDispatch();
 
  
 
  const updatePaymentMethod = () => {
    dispatch(payWithCardReset())
    return <PaymentMethod />
  }
  return (
    <div className='col-lg-7 col-md-12 col-sm-12 col-12 '>

      <button className='btn btn-dark  ms-2' onClick={updatePaymentMethod}>Select Payment Method</button>

    </div>
  )
}


export default PayWithRazorPay;
