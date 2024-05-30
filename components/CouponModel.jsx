import { MDBBtn, MDBModalContent, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCouponLines, fetchCoupon, resetAllState, verifyCoupon } from '@/features/CheckOut/checkOutSlice'
import { toast } from 'react-toastify'
import { htmlToText } from 'html-to-text'
import Spinner from '@/components/Spinner'
// import { fetchCurrency } from '@/features/Currency/currencySlice'
function CouponModel({ toggleShow, total, discount }) {

    const [code, setCode] = useState("")
    const { cart } = useSelector(state => state.cartWish)
    const { showCoupon, coupon, isSuccess, isLoading, couponLines, message } = useSelector(state => state.checkOut)
    const [couponStatus, setCouponStatus] = useState("")
    const [couponMessage, setCouponMessage] = useState()
    const dispatch = useDispatch()

    const handleCoupon = (e) => {
        e.preventDefault()

        if (cart.length !== 0) {
            if (code == "") {
                setCouponStatus('Plz Enter Valid Code')
            }
            else {
                dispatch(verifyCoupon(code))

            }
        }
        else {
            toast.error('Plz Select Products')
        }

    }

    const TodayDate = () => {

        const date = new Date()
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
    }

    const removeCoupon = () => {
        // const showAmount = document.getElementById('showAmount')
        setCouponStatus("Coupon Removed")
        // showAmount.className = "d-none"
        setCouponMessage('')
        dispatch(resetAllState())
        setCode('')
    }
    // const { currency } = useSelector(state => state.currency)



    // useEffect(() => {
    //     dispatch(fetchCoupon())
    //     // dispatch(fetchCurrency())
    // }, [])

    useEffect(() => {
        if (isSuccess == 'verified' && coupon?.length == 0) {
            setCouponStatus("Invalid Coupon")
            // const showAmount = document.getElementById('showAmount')
            // showAmount.innerText=""
            setCouponMessage('')

        }
        if (isSuccess == 'verified' && coupon?.length !== 0) {
            const date = TodayDate()
            //console.log("Date",date==coupon[0].date_expires)
            //console.log("range",coupon[0].minimum_amount>total && total>coupon[0].maximum_amount)
            //console.log("usage",coupon[0].usage_count==coupon[0].usage_limit)
            if (date === coupon.date_expires && coupon[0].usage_count == coupon[0].usage_limit) {
                if ((coupon.minimum_amount > total && total > coupon.maximum_amount)) {
                    setCouponStatus("Not Applicable")
                    setCouponMessage('')
                }
                setCouponStatus("Not Applicable")
                setCouponMessage('')
            } else {
                setCouponStatus("")
                // const showAmount = document.getElementById('showAmount')
                // showAmount.className = "d-block text-dark fs-5 fw-semibold"
                setCouponMessage(htmlToText(`You Will save Rs ${discount} on this order`))
                const coupon_lines = [{
                    "code": coupon[0]?.code
                }]
                // console.log(coupon_lines)
                dispatch(addCouponLines(coupon_lines))
            }

        }

    }, [coupon])
    return (
        <>
            <MDBModalContent className='checkout-mt'>
                <MDBBtn className='btn-close ms-auto m-2' color='none' onClick={toggleShow}></MDBBtn>
                <MDBModalTitle className='w-100 px-3'>  <p className='fs-6'>Select Coupons</p></MDBModalTitle>
                <form className='px-2'>
                    <div className="d-flex gap-3 formBorder" style={{ border: 'none' }} >
                        <input type="text" className="form-control" placeholder="Enter Code" value={code} onChange={(e) => setCode(e.target.value)} />
                        {
                        coupon?.length!==0 ? <>
                            <button className="btn btn-outline-dark" id="basic-addon2" type='button' onClick={removeCoupon}>Remove</button>
                        </> :
                            <>
                                {
                                    isLoading == 'couponVerifypending' ? <>
                                        <button className=" btn btn-outline-dark ">
                                            <i className="fa fa-spinner fa-spin me-3"></i>
                                        </button>
                                    </> : <>
                                        <button className="btn btn-outline-dark" id="basic-addon2" type='button' onClick={(e) => { handleCoupon(e) }}>Check</button>
                                    </>
                                }

                            </>}
                        {/* <button className="btn btn-outline-dark" id="basic-addon2" type='button' onClick={(e) => { handleCoupon(e) }}>Check</button> */}
                    </div>
                    <span className={coupon?.length == 0 ? 'text-danger' : 'text-success'}>{couponStatus}</span>
                    <span className='text-dark fs-5 fw-semibold' style={{ color: 'black!important' }} id="showAmount">{couponMessage}<br />
                    </span>

                </form>

                {
                    isLoading == "couponLoading" ? <>
                        <Spinner />
                    </> : <>
                        {
                            showCoupon?.map(item => (
                                <div className='p-2' key={item?.id}>

                                    <div className="container p-2" style={{ border: "1px solid #e0e0e5", borderRadius: '5px' }}>
                                        <input value={item?.name} className='border-0 rounded-2 w-100 p-2 mb-2 text-dark' style={{ backgroundColor: "#C7C7C7" }} />
                                        <div className="d-flex justify-content-between">
                                            <span className='border-0'>Get {item?.amount}&nbsp;{item.discount_type === 'fixed_cart' ? 'Rupees' : '%'} Off</span>
                                            <button className="btn btn-outline-dark" onClick={() => {
                                                setCode(item?.name)
                                                setCouponMessage('')
                                                setCouponStatus('')
                                            }}
                                                disabled={coupon?.length !== 0 ? true : false}
                                            >Select</button>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                }


                <MDBModalFooter>
                </MDBModalFooter>
            </MDBModalContent>
        </>
    )
}

export default CouponModel
