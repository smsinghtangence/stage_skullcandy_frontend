'use client'
import React, { useEffect, useState } from 'react'
// import cartimage from '@/images/Mask Group 876 (1).png'
import delivery from '@/images/Delivery Address.svg'
import { useDispatch, useSelector } from 'react-redux'
import OrderSummary from '@/components/OrderSummary'
import check from '@/images/Group 2061.svg'
import CartTotal from '@/components/CartTotal'
import ShippingForm from '@/components/ShippingForm'
import PaymentMethod from '@/components/PaymentMethod'
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit';
import AddressSection from '@/components/AddressSection'
import Account from '@/components/Account'
import  LoginBtnForGuest  from '../../../components/LoginBtnForGuest'
import BuyNowTotal from '@/components/BuyNowTotal'
import { resetBuyNow } from '@/features/Cart/cartnWishSlice'
import Spinner from '@/components/Spinner'
import { payWithCardReset, reset, resetAllState, setCheckOutUserType } from '@/features/CheckOut/checkOutSlice'
import NavigateAfterPayment from '@/components/NavigateAfterPayment'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation'
function page() {
    const router = useRouter();
    const { users } = useSelector(state => state.auth)

    const { buyNow, cart, cartComapre } = useSelector(state => state.cartWish)

    const { isLoading, isPaymentWithCard, shipping, address, checkoutUserType } = useSelector(state => state.checkOut)

    const [status, setStatus] = useState(users ? true : false)

    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);



    const dispatch = useDispatch()

    // const navigate = useNavigate()
    
    // window.scrollTo(0, 0)
    if (isLoading == 'updateOrderAfterPaymentPending' && isPaymentWithCard) {
        // navigate('/order-success')
        router.push("/order-success");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>

    <div className="container checkout-mt">

        <div className=" row gap-3 p-2 ">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 ">
                {
                    users ? <>

                        <AddressSection toggleShow={toggleShow} />
                    </> :
                     <>

                        <div className="" >
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 shadow-sm p-4 py-4" >
                                <h6>DONT HAVE AN ACCOUNT? </h6>
                                <hr />
                                <div className="check-out-btn  d-flex gap-3">
                                    {/* <button className={checkoutUserType == 'guest' ? `btn  btn-dark  text-light  btn-md` : 'btn btn-outline-dark btn-md'}
                                        onClick={() => {
                                            dispatch(setCheckOutUserType('guest'))
                                        }}
                                    >Continue as Guest</button> */}
                                    <LoginBtnForGuest />
                                </div>
                            </div>
                            <div className="row  py-2 px-2 ">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 py-3 px-4 d-flex align-item-center justify-content-between" style={{ backgroundColor: "#FFF" }}>
                                    <div className="login-part d-flex gap-3">
                                        {/* <div className="img-cart bg-danger d-flex align-item-center justify-content-center p-1" style={{ width: '50px', height: "50px", borderRadius: "50%" }}>
                                            <img src={delivery} alt="" width={"50%"} />
                                        </div> */}

                                        <p className='mt-3 fs-6'> Delivery</p>
                                        <img src={shipping ? check : ''} alt="" />

                                    </div>

                                    <button className='btn btn-outline-dark btn-sm px-4 h-75  bg-white text-dark addBtn' onClick={toggleShow}>Add </button>
                                </div>
                            </div>

                            {
                                shipping !== "" ? <>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12  bg-light mt-1 py-2">
                                        <div className="items d-flex gap-5 align-item-center">
                                            <p className='text-center mt-2 fs-6'>{shipping.first_name}</p>
                                            <button className='btn btn-light'>{shipping.address_type}</button>
                                            <p className='mt-2 fs-6'>{shipping.phone}</p>


                                        </div>
                                        <p className='text-lgiht mt-2'>{shipping.address_1}</p>
                                        <p className='text-lgiht mt-2'>{shipping.address_2}</p>

                                    </div>
                                </> : <></>
                            }
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <ShippingForm toggleShow={toggleShow} />
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                    </>
                }

                <OrderSummary />
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                {/* <CartTotal /> */}
                {
                    buyNow.length !== 0 ? <><BuyNowTotal /></> : <><CartTotal /></>
                }
            </div>

            <PaymentMethod />
        </div>

    </div>



</>
  )
}

export default page
