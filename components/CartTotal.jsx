import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { addCouponLines, createOrder, reset, verifyCoupon } from '@/features/CheckOut/checkOutSlice'
import { toast } from 'react-toastify'
import couponIcon from '@/images/Group 2040.svg'
import CouponModel from './CouponModel'
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit'
import { fetchCurrency } from '@/features/Currency/currencySlice'
import { htmlToText } from 'html-to-text'
 
function CartTotal() {

    // modle popup
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const { cart } = useSelector(state => state.cartWish)
    const { users } = useSelector(state => state.auth)

    const [code, setCode] = useState("")
    const dispatch = useDispatch()

    // const totalPrice = cart?.reduce((p, c) => {
    //     return parseFloat(p + parseInt(c.price) * c.quantity)
    // }, [0])

    const total = cart?.reduce((p, c) => {
        return parseFloat(p + c.price * c.quantity)
    }, [0])


    const { coupon, isSuccess, order } = useSelector(state => state.checkOut)


    const discount = coupon[0]?.discount_type === "percent" ? parseInt(coupon[0]?.amount) * total / 100 : parseInt(coupon[0]?.amount)
    // console.log('discount', discount)
  
    return (
        <>

            <div className='col-lg-12 col-md-12 col-sm-12 col-12 inner-cart d-flex flex-column
            ' 
            // style={{ backgroundColor: "var(--secondary" }}
            >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Coupon</th>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3"> 
                                <div className="d-flex align-items-center justify-content-between" style={{ border: 'none' }} >
                                    <button className='border-0 btn btn-default d-flex gap-2' ><img src={couponIcon.src} className='couponIcon'/>Apply Coupons</button>
                                    <button className="btn btn-outline-dark" id="basic-addon2" onClick={toggleShow}>Apply</button>
                                </div>
                                {/* <input type="text" className="form-control" placeholder="Enter Code" value={code} onChange={(e) => setCode(e.target.value)} /> */}

                                <p className='text-success' id="couponStatus"></p>
                            </td>

                        </tr>

                        <tr>
                            <th scope="row">Price ({cart.length} items)</th>
                            <td></td>
                            <td><span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>&nbsp;{total}</td>
                        </tr>
                        {
                            coupon !== "" && (
                                <tr>
                                <th scope="row">Discount</th>
                                <td></td>
                                <td>-<span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>&nbsp;{coupon == "" ? 0 : discount}</td>
                            </tr>
                            )
                        }
                       
                        {/* <tr>
                            <th scope="row">Delivery Charges</th>
                            <td></td>
                            <td>&#8377;0</td>
                        </tr> */}
                        <tr>
                            <th scope="row">Total Amount</th>
                            <td></td>
                            {/* <td>&#8377;{Math.round((total) - discount)}</td> */}
                            <td><span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>&nbsp;{coupon == "" ? total : Math.trunc((total) - discount)}</td>

                        </tr>


                        {
                            discount !== undefined && typeof discount === 'number' && discount > 0 && (
                                <>
                                    <tr>

                                        <td colSpan="3">
                                            <p style={{ color: "green" }}>
                                                You Will save <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>&nbsp;{discount} on this order
                                            </p>
                                        </td>


                                    </tr>
                                </>
                            )
                        }


                        <tr>

                        </tr>
                    </tbody>

                </table>

            </div>
            <MDBModal id="accountToggle" show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <CouponModel toggleShow={toggleShow} total={total} discount={discount} />
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default CartTotal
