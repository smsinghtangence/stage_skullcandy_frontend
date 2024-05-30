import React, { useEffect } from 'react'
import ordersummary from '@/images/OrderSummary.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartforLogin, decrement, deleteFromCart, increment, removeFromBuyNow } from '@/features/Cart/cartnWishSlice'
import Link from 'next/link'
// import { fetchCurrency } from '@/features/Currency/currencySlice'
import { htmlToText } from 'html-to-text'
import { getDataWithQuery,geturl } from "@/utils/api"
function OrderSummary() {


    const { cart, buyNow } = useSelector(state => state.cartWish)

    const { users} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    // let quantity = cart?.map(i => {
    //     if (i?.id == buyNow[0]?.id) {
    //         return i?.quantity
    //     }
    // })

    const checkQuantity = cart?.filter((i)=>{
        return i?.id  == buyNow[0]?.id
        // if (i?.id == buyNow[0]?.id){
        //     console.log('i',i?.quantity)
        //     return i
        // }
    })
    // console.log('test',checkQuantity[0]?.quantity)
    // console.log(quantity)

    const handleInc = (i) => {
        if(users?.id){
            const obj = {
                id: i.id, quantity: checkQuantity[0]?.quantity + 1
            }
           
            dispatch(addToCartforLogin(obj))
        }
        else{
            dispatch(increment(i))
        }
        //console.log(obj)
    }

    const handleDec = (i) => {
       if(users?.id){
        const obj = {
            id: i.id, quantity: checkQuantity[0]?.quantity == 1 ? 1 : (checkQuantity[0]?.quantity - 1)
        }
        dispatch(addToCartforLogin(obj))
       }else{
        dispatch(decrement(i))
       }
    }
    // const { currency } = useSelector(state => state.currency)

    // useEffect(() => {
    //     dispatch(fetchCurrency())
    // }, [])
    // const handleRemove = (id) => {
    //     dispatch(deleteFromCart(id))
    //     dispatch(removeFromBuyNow(id))
    // }
    // console.log(quantity[0])
    return (
        <>
            <div className="container mt-5 ">
                <div className=" row">
                    <div className=" p-4 col-lg-12 col-md-12 col-sm-12 col-12  " style={{ backgroundColor: "#FFF" }}>
                        <div className="login-part d-flex gap-4">
                            {/* <div className="img-cart bg-danger d-flex align-item-center justify-content-center p-1" style={{ width: '50px', height: "50px", borderRadius: "50%" }}>
                                <img src={ordersummary} alt="" width={"50%"} />
                            </div> */}
                            <h6 className='mt-3'> Order Summary</h6>
                        </div>
                        <hr />
                        {
                            buyNow?.length !== 0 ? <>
                                {
                                    buyNow?.map((item, index) => (
                                        <div className="row mb-3" key={index}>
                            
                                            <div className="col-lg-12 ps-5">
                                                <div className='summary-list d-flex align-items-center'>
                                                <div className="summry-img">
                                                <img src={geturl(item.image) === false ? "" : geturl(item.image)} alt="" width={'150px'} height={'150px'} />
                                                </div>
                                                <div className="item-data">
                                                    <p>Delivery By {item?.estimate_delivery_date}</p>

                                                    <h6>{item.title}</h6>
                                                    <p className="d-flex align-items-start justify-content-start flex-column gap-2">
                                                        <span>
                                                        <span className="price">
                                                            {/* {htmlToText(currency?.currency_symbol)} */}
                                                            <span className="woocommerce-Price-currencySymbol">₹</span>
                                                            {parseInt(item?.price)}
                                                        </span>
                                                        <s className="cross-price">

                                                            {((item.regular_price - item.price) / item.regular_price) * 100 > 0 && (
                                                                <>
                                                                    {/* {htmlToText(currency?.currency_symbol)} */}
                                                                    <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                    {item.regular_price}
                                                                </>
                                                            )}

                                                        </s>
                                                        <span className="off">
                                                            {((item.regular_price - item.price) / item.regular_price) * 100 > 0 && (
                                                                <>
                                                                    {Math.round(((item.regular_price - item.price) / item.regular_price) * 100)}%
                                                                </>
                                                            )}
                                                        </span>
                                                        </span>

                                                        <span className='d-flex w-100'>
                                                        <span className='text-secondry text-bold w-25 fs-6'>QTY {checkQuantity[0]?.quantity}</span>

                                                            <span className="w-75 input-group border-0  d-flex align-items-center justify-content-center">
                                                                <span className="input-group border-0 quantity d-flex align-items-center justify-content-center">
                                                                    <span className="input-group-text cursorClass " onClick={() => handleDec(item)}>-</span>
                                                                    <input type="text" readOnly className="input-group-text " style={{ "width": "20%!important" }} value={checkQuantity[0]?.quantity} />

                                                                    <span className="input-group-text cursorClass" onClick={() => handleInc(item)}>+</span>
                                                                </span>

                                                            </span>
                                                            {/* <svg style={{ "color": "var(--danger)" }} onClick={() => handleRemove(item?.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-3 bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg> */}

                                                        </span>
                                                    </p>
                                                   

                                                </div>
                                                </div>

                                            </div>
                                            <hr className='mt-3' />
                                        </div>

                                    ))
                                }
                            </> : <>{
                                cart?.map((item, index) => (
                                    <div className="row mb-3" key={index}>
                                        
                                        <div className="col-lg-12">
                                        <div className='summary-list d-flex align-items-center'>
                                        <div className="summry-img">
                                        <Link href={`/shop/${item?.slug}`}>
                                            <img src={geturl(item.image) === false ? "" : geturl(item.image)} alt="" width={'150px'} height={'150px'} 
                                           
                                            />
                                            </Link>
                                          </div>
                                            <div className="item-data">
                                                <p>Delivery By {item?.estimate_delivery_date}</p>

                                                <Link href={`/shop/${item?.slug}`} style={{textDecoration:'none'}}><h6 className='text-dark' >{item.title}</h6></Link>
                                                <p className="d-flex align-items-center justify-content-start">
                                                    <span className="price">
                                                        {/* {htmlToText(currency?.currency_symbol)} */}
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        {item.price}
                                                    </span>
                                                    <s className="cross-price">

                                                        {((item.regular_price - item.price) / item.regular_price) * 100 > 0 && (
                                                            <>
                                                                {/* {htmlToText(currency?.currency_symbol)} */}
                                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                                {item.regular_price}
                                                            </>
                                                        )}

                                                    </s>
                                                    <span className="off">
                                                        {((item.regular_price - item.price) / item.regular_price) * 100 > 0 && (
                                                            <>
                                                                {Math.round(((item.regular_price - item.price) / item.regular_price) * 100)}%
                                                            </>
                                                        )}
                                                    </span>
                                                </p>
                                                {/* <p className='d-flex gap-3'><del> {htmlToText(currency?.currency_symbol)}{item.regular_price}</del>
                                                    <span><i className="fa fa-rupee">{item.price}</i></span>
                                                    {((item.regular_price - item.price) / item.regular_price) * 100}%off </p> */}
                                                <p className='text-secondry text-bold'>QTY {item?.quantity}</p>
                                            </div>
                                            </div>
                                        </div>
                                        <hr className='mt-3' />
                                    </div>
                                ))

                            }</>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderSummary
