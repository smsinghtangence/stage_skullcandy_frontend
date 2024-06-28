'use client'
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'

import OrderSummary from '@/components/OrderSummary';
import PaymentMethod from '@/components/PaymentMethod';
import { useRouter } from 'next/navigation'
import AddressSection from '@/components/AddressSection'
function page() {

    const router = useRouter();
    const { users } = useSelector(state => state.auth)
    const { cart, wishlist } = useSelector(state => state.cartWish)

    const { isLoading, isPaymentWithCard, shipping, address, checkoutUserType } = useSelector(state => state.checkOut)


    const [status, setStatus] = useState(users ? true : false)



    const toggleShow = () => setBasicModal(!basicModal);

    const handleLoginRedirect = () => {
        const currentUrl = window.location.href;
        localStorage.setItem('redirectAfterLogin', currentUrl);
        router.push('/my-account?r=checkout');
      };
      const [isActive, setIsActive] = useState(false);
      const [isActiveOtp, setIsActiveOtp] = useState(false);
      
        const handleToggle = () => {
          setIsActive(!isActive);
        };
      
        const handleToggleOtp = () => {
          setIsActiveOtp(!isActiveOtp);
          setIsActive(!isActive);
        };
        const [mobile, setMobile] = useState('');
        const [validationMessage, setValidationMessage] = useState('');
      
        const handleMobileChange = (e) => {
          const value = e.target.value;
          setMobile(value);
      
          // Regex for mobile number validation (e.g., 10 digits)
          const mobileRegex = /^[0-9]{10}$/;
          if (!mobileRegex.test(value)) {
            setValidationMessage('Please enter a valid 10-digit mobile number.');
          } else {
            setValidationMessage('');
          }
        };
    return (
        <>
            <section className="checkout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="checkout-left">

                            {
                                    !users?.id &&
                                <div className="row">
                                    <div className="col-lg-12 ">
                                       
                                            {/* <button onClick={handleLoginRedirect} className='btn btn-dark mt-5' >Login / Signup</button>
                                         */}
                                        <p>Already have an account? <Link href="#" onClick={handleToggle} className='click-login'>Click here to login</Link></p>
                                        <div className={`click-login-content ${isActive ? 'active' : ''}`}>
                                            <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                                            <label htmlFor="mobile">Mobile No</label>
                                           
                                                    <input
                                                        type="text"
                                                        className='form-control'
                                                        id='login-mobile'
                                                        value={mobile}
                                                        onChange={handleMobileChange}
                                                    />
                                                    {validationMessage && <p className="validation-message">{validationMessage}</p>}
                                            <Link href="#" onClick={handleToggleOtp} className='request-otp'>Request OTP</Link>
                                        </div>
                                             <div className={`otp-blk ${isActiveOtp ? 'active1' : ''}`}>
                                                <div id="otp">
                                                    <input type="text" className='otp-box'/>
                                                    <input type="text" className='otp-box'/>
                                                    <input type="text" className='otp-box'/>
                                                    <input type="text" className='otp-box'/>
                                                </div>
                                                <Link href="#" className='request-otp'>Verify</Link>
                                            </div>

                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <hr />
                                    </div>
                                </div>
                                }
                            {/* {
                                    !users?.id &&
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                       
                                            <button onClick={handleLoginRedirect} className='btn btn-dark mt-5' >Login / Signup</button>
                                        
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <hr />
                                    </div>
                                </div>
                                } */}
                                {/* <p>Express checkout</p> */}
                                {/* <div className="checkout-btn">

                                    <a href="#" className='shop-pay'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="inherit"
                                            aria-hidden="true"
                                            preserveAspectRatio="xMidYMid"
                                            viewBox="0 0 341 80.035"
                                            style={{ fill: "white" }}
                                            className="P3VGi"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z" />
                                        </svg>

                                    </a>
                                    <a href="#" className='paypal'>
                                        <img src="/images/paypal.svg" alt="" />
                                    </a>
                                    <a href="#" className='g-pay'><img src="/images/dark_gpay.svg" alt="" /></a>
                                </div>

                                <div className="or">
                                    <span>or</span>
                                </div> */}

                                {/* contact form start */}
                                {/* <div className="checkout-contact-form">
                                    <div className="ccf-heading">
                                        <h4>Contact </h4>
                                        <a href="/my-account">Log in</a>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text" className='form-control form-control-lg' placeholder='Email' />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Email me with news and offers
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                                {/* contact form end */}
                                {/* <AddressSection toggleShow={toggleShow} /> */}
                                {
                                    users?.id &&  
                                    <AddressSection />

                                }


                                <div className="payment">


                                    <div className="accordion" id="accordionWithRadioExample_PreChecked">

                                        {
                                            users?.id && cart?.length > 0 && <PaymentMethod />
                                        }

                                    </div>












                                    {/* <h4>Payment</h4>
                                    <p>All transactions are secure and encrypted.</p> */}

                                </div>


                                {/* <div className="billing-address">
                                    <h4>Billing address</h4>


                                    <div className="accordion" id="billing-address">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="custom-control custom-radio">
                                                    <input data-toggle="collapse" data-target="#collapseOne_billing_adress" type="radio" id="customRadio1_billing_adress" name="billing-address" className="custom-control-input" />
                                                    <label className="custom-control-label" for="customRadio1_billing_adress"> Same as shipping address</label>
                                                </div>
                                            </div>

                                            <div id="collapseOne_billing_adress1" className="collapse " data-parent="#billing-address">
                                                <div className="card-body">
                // Pre-checked collapse 1 content
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <div className="custom-control custom-radio">
                                                    <input data-toggle="collapse" data-target="#collapseTwo_billing_adress" type="radio" id="customRadio2_billing_adress" name="billing-address" className="custom-control-input" />
                                                    <label className="custom-control-label" for="customRadio2_billing_adress">Use a different billing address</label>
                                                </div>
                                            </div>
                                            <div id="collapseTwo_billing_adress" className="collapse" data-parent="#billing-address">
                                                <div className="card-body">
                                                    <div className="billing-address">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <select name="" id="" className="form-control">
                                                                    <option value="">United State</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <input type="text" className='form-control' placeholder='First name' />
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <input type="text" className='form-control' placeholder='Last name' />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <input type="text" className='form-control' placeholder='Address' />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <input type="text" className='form-control' placeholder='Apartment, suite, etc. (optional)' />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <input type="text" className='form-control' placeholder='City' />
                                                            </div>

                                                            <div className="col-lg-4">
                                                                <select name="" id="" className="form-control" >
                                                                    <option value="">Alabama</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-lg-4">
                                                                <input type="text" className='form-control' placeholder='ZIP code' />
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <input type="text" className='form-control' placeholder='Phone (optional)' />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div> */}
                                {/* <div className="checkout-links">
                                    <ul>
                                        <li><Link href="#">Refund policy</Link></li>
                                        <li><Link href="#">Shipping policy</Link></li>
                                        <li><Link href="#">Privacy policy</Link></li>
                                        <li><Link href="#">Terms of service</Link></li>
                                        <li><Link href="#">Contact information</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <OrderSummary />

                    </div>
                </div>
            </section>
        </>
    )
}

export default page