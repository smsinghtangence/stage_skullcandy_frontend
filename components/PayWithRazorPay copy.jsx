'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import { updateOrderAfterPayment, reset, payWithCardReset, orderReset, setPyamentRazorpayStatus } from '@/features/CheckOut/checkOutSlice';

import { reset as cartReset, deleteAllItemsFromCart } from '@/features/Cart/cartnWishSlice'
import PaymentMethod from './PaymentMethod';


function PayWithRazorPay() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const router = useRouter();
  const { payWithCard, order, isSuccess, message , isOrderUpdated} = useSelector(state => state.checkOut);
// rzp_live_KWSzV46o3mwnV7
  var options = {
    key: "rzp_test_hTSzc7KeSl5FzN", // razor pay key
    currency: "INR",
    name: "Pegasus", // your business name
    description: "order_NuQU8fjrtTKdCZ",
    image: "",
    order_id: "order_NuQU8fjrtTKdCZ",
    handler: function (response) {
      // toast.success('Payment Successful');
      const data = {
        "status": "processing",
        "meta_data": [

          {
            "key": "payment_id",
            "value": response.razorpay_payment_id
          },
          {
            "key": "order_id",
            "value": response.razorpay_order_id
          }
        ]
      }
      dispatch(updateOrderAfterPayment(data));
      dispatch(setPyamentRazorpayStatus())
      
      // dispatch(deleteAllItemsFromCart())
      // dispatch(reset())
    },
    // prefill: {
    //   "name": "For test",
    //   "email": "test@gamil.com",
    //   "contact": "9000090000"
    // },
    "notes": {
      "woocommerce_order_number": order?.id,
      "woocommerce_order_id": order?.id
    },
    theme: {
      "color": "#bf1220"
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response) {
    const data = {
      "status": "failed",
      "meta_data": [
        {
          "key": "order_id",
          "value": response.razorpay_order_id
        }
      ]
    }
    dispatch(updateOrderAfterPayment(data));
   
    toast.error('Payment Failed');
  });

  // useEffect(() => {
  //   if (isSuccess && message === "success") {
  //     navigate('/');
  //     localStorage.removeItem('cart')
  //     dispatch(deleteAllItemsFromCart())
  //     dispatch(cartReset())
  //     dispatch(reset())
  //   }
  // }, [isSuccess,order,message]); 

  useEffect(() => {
    return () => {
      rzp1.close();
    };
  }, []);

  useEffect(() => {
    rzp1.open()
    //dispatch(setOrderUpdated())
  }, [])

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
