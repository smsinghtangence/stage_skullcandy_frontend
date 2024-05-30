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
   
    const total = cart?.reduce((totalPrice, i) => {
    
        let sku = i?.SKU
                  
        let activeSlide = (i?.Variation_Sliders)?.find(product => product?.SKU === sku)
         
          let quantity = i?.quantity
      
          let price = activeSlide?.sales_price ? activeSlide?.sales_price :activeSlide?.Variations_Price;
        
        return parseFloat(totalPrice + price * quantity);
      }, 0);
   

    
    return (
        <>
        
        
            <div className="col-lg-5">
                            <div className="checkout-right">
                                
                                  
                                   
                                   {/*  */}
                                   {/* //////////// */}
                                   <>
                                   {cart?.map((item, index) => {
                                    let sku = item?.SKU
                                    let activeSlide = (item?.Variation_Sliders)?.find(product => product?.SKU === sku)
                                    // console.log(JSON.stringify(activeSlide))
                                    let quantity = item?.quantity
                                    let price = activeSlide?.sales_price ? activeSlide?.sales_price :activeSlide?.Variations_Price;

                                    return (
                                        <>
                                    <div className="checkout-product"> 
                                    <div className="checkout-product-list" key={index}>
                                        <div className="cpl-blk">
                                            <Link href={`/shop/${item?.slug}`}>
                                            <div className="cpl-img">
                                               
                                                <img src={geturl(activeSlide?.Variant_Image)}  alt={activeSlide?.Variations_Color_Name} />
                                                <span className="badge">{quantity}</span>
                                            </div>
                                            </Link>
                                            <div className="cpl-content">
                                                <p>{item?.title}</p>
                                                <span>{activeSlide?.Variations_Color_Name}</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="checkout-product-price"><i class="fa fa-rupee"></i>{price}</div>
                                    </div>
                                   </>
                                          )}
                                        )
                                    }
                                </>
                                   
                                   {/*  */}
                                   
                                

                                <div className="discount-code">
                                    <form action="">
                                        <input type="text" className='form-conrol' placeholder='Discount code' />
                                        <Link href="#" className="apply-btn">Apply</Link>
                                    </form>
                                </div>

                                <div className="checkout-subtotal-blk">
                                    <div className="checkout-subtotal">
                                        <div className="cs-text">Subtotal</div>
                                        <div className="cs-price"><i class="fa fa-rupee"></i>{total}</div>
                                    </div>

                                    {/* <div className="checkout-shipping">
                                        <div className="shipping-text">
                                            Shipping
                                            <button className="shipping-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wuo _1fragemoo _1fragempp _1fragemlt _1fragemlo"><circle cx="7" cy="7" r="5.6"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M5.6 5.1c.2-1.3 2.6-1.3 2.8 0S6.95 6.4 6.95 7.45m.055 2.35H7v.005h.005z"></path><circle cx="7" cy="9.7" r="0.1"></circle></svg>
                                            </button>
                                        </div>
                                        <div className="shipping-address">Enter shipping address</div>
                                    </div> */}

                                    <div className="checkout-total">
                                        <div className="chekout-total-text">Total</div>
                                        <div className="checkout-total-price"><i class="fa fa-rupee"></i>{total}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
        </>
    )
}

export default OrderSummary
