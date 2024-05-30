import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import couponIcon from '@/images/Group 2040.svg'
import CouponModel from '@/components/CouponModel'
import { MDBModal, MDBModalDialog } from 'mdb-react-ui-kit'
import { htmlToText } from 'html-to-text'
import { fetchCurrency } from '@/features/Currency/currencySlice'

function BuyNowTotal() {
     // modle popup
     const [basicModal, setBasicModal] = useState(false);

     const dispatch = useDispatch()

     const toggleShow = () => setBasicModal(!basicModal);
 
     const { cart , buyNow } = useSelector(state => state.cartWish)
     
 
    //  const total = cart?.reduce((p, c) => {
        
    //      return parseFloat(p + c.price * c.quantity)
    //  }, [0])
 
    const fetchBuyNowProduct = cart?.filter((i)=>{
        // console.log(i?.id == buyNow[0]?.id)
        if (i?.id == buyNow[0]?.id){
            return i
        }
    })
    const total = parseFloat(fetchBuyNowProduct[0]?.price * fetchBuyNowProduct[0]?.quantity)
    //  console.log('total',total)
 
     const {coupon} = useSelector(state => state.checkOut)
 
 
     const discount = coupon[0]?.discount_type === "percent" ? parseInt(coupon[0]?.amount) * total / 100 : parseInt(coupon[0]?.amount)
  
     const { currency } = useSelector(state => state.currency)

     useEffect(() => {
         dispatch(fetchCurrency())
     }, [])
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
                                <p className='text-success' id="couponStatus"></p>
                            </td>

                        </tr>

                        <tr>
                            <th scope="row">Price ({buyNow.length} items)</th>
                            <td></td>
                            <td><i>{htmlToText(currency?.currency_symbol)}</i>&nbsp;{total}</td>
                        </tr>
                        {
                            coupon !== "" && (
                                <tr>
                                <th scope="row">Discount</th>
                                <td></td>
                                <td>-<i>{htmlToText(currency?.currency_symbol)}</i>&nbsp;{coupon == "" ? 0 : discount}</td>
                            </tr>
                            )
                        }
                       
                        {/* <tr>
                            <th scope="row">Delivery Charges</th>
                            <td></td>
                            <td><i>{htmlToText(currency?.currency_symbol)}</i>0</td>
                        </tr> */}
                        <tr>
                            <th scope="row">Total Amount</th>
                            <td></td>
                            {/* <td><i>{htmlToText(currency?.currency_symbol)}</i>{Math.round((total) - discount)}</td> */}
                            <td><i>{htmlToText(currency?.currency_symbol)}</i>&nbsp;{coupon == "" ? total : Math.trunc((total) - discount)}</td>

                        </tr>


                        {
                            discount !== undefined && typeof discount === 'number' && discount > 0 && (
                                <>
                                    <tr>

                                        <td colSpan="3">
                                            <p style={{ color: "green" }}>
                                                You Will save <i>{htmlToText(currency?.currency_symbol)}</i>&nbsp;{discount} on this order
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

export default BuyNowTotal
