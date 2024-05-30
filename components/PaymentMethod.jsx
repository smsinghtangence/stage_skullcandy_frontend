'use client'
import React, { useEffect, useState } from 'react'
import payment1 from '@/images/Payment Option.svg'
import { useDispatch, useSelector } from 'react-redux'
import { PaymentWithCard, addPaymentDetails, createOrder, orderReset, payWithCardReset, reset, resetAllState, setRazorPayPopUp,setPyamentRazorpayStatus, updateOrderAfterPayment } from '@/features/CheckOut/checkOutSlice'
import { toast } from 'react-toastify'
import RazorPay from '@/images/razorpay-icon.svg'
import PayWithRazorPay from './PayWithRazorPay'
import { reset as cartReset, compareCartState, deleteAllItemsFromCart, deleteFromCart, removeFromCart, resetCartAfterPaymentForGustUser } from '@/features/Cart/cartnWishSlice'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit'
import ShippingForm from './ShippingForm'
import Spinner from './Spinner'
import Account from './Account'
import CryptoJS from "crypto-js"
// import Currency from './Currency';
import axios from "axios"
const API_URL = process.env.API_URL
const TOKEN = process.env.TOKEN || '';
function PaymentMethod() {
    
////////////////
    //////////
    const dispatch = useDispatch()

    // const navigate = userouter.push()
    const router = useRouter();
    const [basicModal, setBasicModal] = useState(true);

    const toggleShow = () => setBasicModal(!basicModal);

    
    const [Modal, setModal] = useState(true);

    const toggle = () => setModal(!Modal);

    const { cart, cartComapre, buyNow } = useSelector(state => state.cartWish)

    const { users } = useSelector(state => state.auth)
    // const cartSnapshot = [...cart];

    const { shipping, payment, order, isSuccess, payWithCard, razorpay, message, isOrder, isRazorPayPopUp, isPaymentWithCard
        , isLoading, checkoutUserType } = useSelector(state => state.checkOut)
    // const [razorpay, setRazorPay] = useState(false)


    const handleChange = (paymentDetails) => {
        if (paymentDetails.payment_method == 'cod') {

            dispatch(addPaymentDetails(paymentDetails))
        }
        else {
            // setRazorPay(true)
            dispatch(addPaymentDetails(paymentDetails))
        }

    }

     

    //cod after order has placed
    useEffect(() => {
        if (isSuccess && order?.id && razorpay == false && payment.payment_method == 'cod') {
            //toast.success('Your Order is Successfully Placed')
            var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(order?.id), '').toString();
            var encrypt_orderid = ciphertext.replace(/\+/g,'p1L2u3S').replace(/\//g,'s1L2a3S4h').replace(/=/g,'e1Q2u3A4l');
            if (buyNow.length !== 0) {
                const product = cart?.filter((i) => {
                    return i?.id == buyNow[0]?.id
                })
                if (users?.id) {
                    dispatch(deleteFromCart(product[0]?.id))//delete only purchased product from cart

                } else {
                    dispatch(removeFromCart(product[0]?.id))
                }

                router.push('/success/'+encrypt_orderid)
                dispatch(reset())
                dispatch(resetAllState())
            }

            else {
                if (users?.id) {
                    dispatch(deleteAllItemsFromCart())//delete all products from cart
                } else {
                    localStorage.removeItem('cart')
                    dispatch(resetCartAfterPaymentForGustUser())
                }


                // router.push('/success')
                router.push('/success/'+encrypt_orderid)
                dispatch(reset())
                dispatch(resetAllState())
            }

        }
        if (order?.id && razorpay === true && isRazorPayPopUp) {
            dispatch(compareCartState(cart))
            // dispatch(PaymentWithCard(
            //     {
            //         "amount": parseInt(order?.total) * 100,
            //         "order_id": order?.ref_order_id
            //     }))
            dispatch(updateOrderAfterPayment(
                {
                    "amount": parseInt(order?.total) * 100,
                    "order_id": (order?.ref_order_id).toString
                }))
                
            // dispatch(deleteAllItemsFromCart())
            // dispatch(reset())
        }
    }, [order, razorpay, isRazorPayPopUp])

 

    

     ////////////////////////
 const makePayment = async () => {
    // console.log("here...");
    ///////////
    dispatch(setRazorPayPopUp())
    let lineItems
    if (buyNow.length !== 0) {
        lineItems = buyNow.map((item) => {
            return { product_id: item.id, quantity: item.quantity }
        })
    } else {
        lineItems = cart.map((item) => {
            return { product_id: item.id, quantity: item.quantity }
        })
    }

    // if (checkoutUserType == 'login' && !users) {
        if (  !users?.id) {
        toggle()
    } else {
        if (shipping?.length !== 0) {
            if (payment) {
                if (order?.id && isOrder) {

                    // console.log('cartSnapshot', cartSnapshot)
                    //console.log('cart', cart)
                    const hasCartChanged = compareArrays(cartComapre, cart);
                    // console.log(cartSnapshot)
                    // console.log(hasCartChanged)
                    if (hasCartChanged) {
                        // console.log('order created')
                        dispatch(createOrder(lineItems))
                    } else {
                        const data = {
                            "payment_method": payment.payment_method == 'cod' ? 'cod' : 'razor pay',
                            "payment_method_title": payment.payment_method_title == 'Cash on Delivery' ? 'Cash on Delivery' : 'razor pay',
                            "set_paid": "false"
                        }
                        dispatch(updateOrderAfterPayment(data))
                        //console.log('order updated')
                    }

                } else {
                    dispatch(createOrder(lineItems))

                }
            } else {
                toast.error('plz select payment method')
            }
        } else {
            window.scroll(0, 0)
            // toast.error('Plz Select Address')
            toggleShow()
        }
    }
     //////////////////////

  if(order?.ref_order_id){
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
  
    // Make API call to the serverless API

    const response = await axios.post(API_URL + '/api/razorpay' , {}, {headers: {
        "Authorization": `Bearer ${TOKEN}`
         
      }})
    // const data = await fetch("http://localhost:1337/api/razorpay", { method: "POST", headers: {
    //     "Authorization": `Bearer ${TOKEN}`
         
    //   }}).then((t) =>{
         
    //     console.log("test " + JSON.stringify(t))
    //   }
      
    // );
    // dispatch(PaymentWithCard())
   const updateobj = {
         
   
        "amount": response?.data?.amount,
        // "order_id": order?.ref_order_id,
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
        contact: users?.phone,
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
         };
 
}
const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);
  
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };
  ////////////////////////

    return (
        <>
            <div className="ms-2" >

                <div className="row col-lg-7 col-md-12 col-sm-12 col-12  mt-5" style={{ backgroundColor: "#FFF" }}>


                    <div className="" >
                        <div className="login-part d-flex gap-4">
                            {/* <div className="img-cart mt-2 bg-danger d-flex align-item-center justify-content-center p-1" style={{ width: '50px', height: "50px", borderRadius: "50%" }}>
                                <img src={payment1} alt="" width={"50%"} />
                            </div> */}

                            <h6 className='mt-3'> Payment</h6>
                            <img src="" alt="" />

                        </div>
                        <hr />


                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-3">

                                <ul className='d-flex gap-2' style={{ listStyle: "none" }}>

                                    <li><input type="radio" checked={payment.payment_method == 'razor pay' ? true : false} name="payment_method" id="paywithcard" onChange={() => {
                                        handleChange({
                                            payment_method: 'razor pay',
                                            payment_method_title: "razor pay",
                                            set_paid: "false"
                                        })
                                    }} /></li>
                                    <li><img src="" alt="" /></li>
                                    <li>Credit Card/Debit Card/Net Banking<br />Pay By <img src={RazorPay.src} width={'30%'} /></li>
                                </ul>
                                {/* <hr /> */}
                            </div>

                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12 px-3">

                                <ul className='d-flex gap-2' style={{ listStyle: "none" }}>

                                    <li><input type="radio" name="payment_method" id="" onChange={() => {
                                        handleChange({
                                            payment_method: 'cod',
                                            payment_method_title: "Cash on Delivery",
                                            set_paid: "false"
                                        })
                                    }} /></li>
                                    <li><img src="" alt="" /></li>
                                    <li>Cash On Delivery (<span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>20 Shipping Cost)</li>
                                </ul>
                                <hr />
                            </div> */}

                        </div>

                    </div>
                    {
                        isLoading == 'orderPending' ? <>
                            <button className=" btn btn-dark w-100">
                                <i className="fa fa-spinner fa-spin me-3"></i>Loading
                            </button>
                        </>
                            : <>
                                <button id='order-btn' className=' mt-3 btn btn-block btn-dark text-light w-100 ' onClick={() => { makePayment() }}>Place Order</button>

                            </>
                    }
                </div>

            </div>


            {/*  */}
            <div className={basicModal ? "" : "active"}>
                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg  ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={setBasicModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <ShippingForm toggleShow={toggleShow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <ShippingForm toggleShow={toggleShow} />
                </MDBModalDialog>
            </MDBModal> */}
            {/*  */}
            {/* ///////////////////////////////// */}
            {/*  */}
            <div className={Modal ? "" : "active"}>
                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg  ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={setModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <Account toggleShow={toggle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            {/*  */}
            {/* <MDBModal id="accountToggle" show={Modal} setShow={setModal} tabIndex='-1'>
                <MDBModalDialog>
                    <Account toggleShow={toggle} />
                </MDBModalDialog>
            </MDBModal> */}
        </>

    )
}




export default PaymentMethod
