'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
 
import { toast } from 'react-toastify';
import { updateOrderAfterPayment, reset, payWithCardReset, orderReset, setPyamentRazorpayStatus } from '@/features/CheckOut/checkOutSlice';

import { reset as cartReset, deleteAllItemsFromCart } from '@/features/Cart/cartnWishSlice'
import PaymentMethod from './PaymentMethod';


async function PayWithRazorPay() {
  const dispatch = useDispatch();
  const { payWithCard, order, isSuccess, message , isOrderUpdated} = useSelector(state => state.checkOut);

    if(order?.ref_order_id){
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
  
    // Make API call to the serverless API

    const response = await axios.post(API_URL + '/api/razorpay' , {
        
        "amount":parseInt(total),
        "currency": "INR",
        "order_id": (order?.ref_order_id).toString

     }, {headers: {
        "Authorization": `Bearer ${TOKEN}`
         
      }})
  
   const updateobj = {
         
   
        "amount": response?.data?.amount,
        "order_id":response?.data?.razorpay_order_id,
        "customer_id": users?.id
    }
    dispatch(updateOrderAfterPayment(updateobj));
    // console.log("data s " + JSON.stringify(updateobj));
    var options = {
      // key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      //rzp_test_XyZej6YBl2vSjA
      key: "rzp_test_hTSzc7KeSl5FzN", 
      name: "Skullcandy",
      currency: response?.data?.currency,
      amount: response?.data?.amount,
      order_id: response?.data?.id,
      description: "Skullcandy",
      image: "",
      handler: function (response) {
        // console.log(JSON.stringify(response))
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        
        const update_object = {
            "payment_id": response.razorpay_payment_id,
            "order_id": response.razorpay_order_id,
            "signature":response.razorpay_signature,
            "customer_id": users?.id
        }
        dispatch(updateOrderAfterPayment(update_object));
        dispatch(setPyamentRazorpayStatus())


      },
      prefill: {
        name: users?.Address?.first_name,
        email: users?.email,
        contact: users?.mobile,
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
         };
 
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
