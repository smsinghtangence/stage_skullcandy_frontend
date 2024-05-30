'use client'
import CartContainer from '@/components/CartContainer'
import CartContainer2 from '@/components/CartContainer2'
import { payWithCardReset } from '@/features/CheckOut/checkOutSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
function page() {

  const { cart, wishlist, isLoading } = useSelector(state => state.cartWish)

    const [login, setLogin] = useState(false)

    const { users } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    window.scroll(0,0)
    useEffect(() => {

        if (users?.success == true || users?.id) {
            setLogin(true)
            
        }
        else {
            setLogin(false)

        }
        dispatch(payWithCardReset())
    }, [])


    const total = cart?.reduce((p, c) => {
      return parseFloat(p + c.price * c.quantity)
  }, [0])

  return (
    <>
        <section className="title_section">
          <div className="conatiner-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Cart  
                  </h2></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="container max_container pb-3">
              <div className="woocommerce"><div className="woocommerce-notices-wrapper" />
                <form className="woocommerce-cart-form" action="https://www.skullcandy.in/cart/" method="post">
                  <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th className="product-remove">&nbsp;</th>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>

 {/* ///////////////        */}

 {
                                                    login === true ? <>
                                                        {
                                                            cart?.map((i, index) => (
                                                                <CartContainer i={i} key={index} />
                                                            ))
                                                        } </> : <>
                                                        {
                                                            cart?.map((i, index) => (
                                                                <CartContainer2 i={i} key={index} />
                                                            ))


                                                        }
                                                    </>
                                                }

                 






               {/* ///////////////        */}
                      {/* <tr>
                        <td colSpan={6} className="actions">
                          <div className="coupon">
                            <label htmlFor="coupon_code">Coupon:</label> <input type="text" name="coupon_code" className="input-text" id="coupon_code"   placeholder="Coupon code" /> <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                          </div>
                           <button type="submit" className="button" name="update_cart" value="Update cart" disabled aria-disabled="true">Update cart</button>  
                          <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" defaultValue="f2d13ebf7e" /><input type="hidden" name="_wp_http_referer" defaultValue="/cart/" />            </td>
                      </tr> */}
                    </tbody>
                  </table>
                </form>
                <div className="cart-collaterals">
                  <div className="cart_totals ">
                    <h2>Cart totals</h2>
                    <table cellSpacing={0} className="shop_table shop_table_responsive">
                      <tbody><tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">₹</span>{total}</bdi></span></td>
                        </tr>
                        <tr className="woocommerce-shipping-totals shipping">
                          <th>Shipping</th>
                          <td data-title="Shipping">
                            <ul id="shipping_method" className="woocommerce-shipping-methods">
                              <li>
                                <input type="hidden" name="shipping_method[0]" data-index={0} id="shipping_method_0_free_shipping1" defaultValue="free_shipping:1" className="shipping_method" /><label htmlFor="shipping_method_0_free_shipping1">Free shipping</label>               </li>
                            </ul>
                            <p className="woocommerce-shipping-destination">
                              Shipping to <strong>Delhi</strong>.               </p>
                            <form className="woocommerce-shipping-calculator" action="https://www.skullcandy.in/cart/" method="post">
                              <a href="#" className="shipping-calculator-button">Change address</a>
                              <section className="shipping-calculator-form" style={{display: 'none'}}>
                                <p className="form-row form-row-wide" id="calc_shipping_country_field">
                                  <select name="calc_shipping_country" id="calc_shipping_country" className="country_to_state country_select" rel="calc_shipping_state">
                                    <option value="default">Select a country / region…</option>
                                    <option value="IN" selected="selected">India</option>             </select>
                                </p>
                                <p className="form-row form-row-wide validate-required" id="calc_shipping_state_field">
                                  <span>
                                    <select name="calc_shipping_state" className="state_select" id="calc_shipping_state" data-placeholder="State / County"><option value>Select an option…</option><option value="AP">Andhra Pradesh</option><option value="AR">Arunachal Pradesh</option><option value="AS">Assam</option><option value="BR">Bihar</option><option value="CT">Chhattisgarh</option><option value="GA">Goa</option><option value="GJ">Gujarat</option><option value="HR">Haryana</option><option value="HP">Himachal Pradesh</option><option value="JK">Jammu and Kashmir</option><option value="JH">Jharkhand</option><option value="KA">Karnataka</option><option value="KL">Kerala</option><option value="LA">Ladakh</option><option value="MP">Madhya Pradesh</option><option value="MH">Maharashtra</option><option value="MN">Manipur</option><option value="ML">Meghalaya</option><option value="MZ">Mizoram</option><option value="NL">Nagaland</option><option value="OR">Odisha</option><option value="PB">Punjab</option><option value="RJ">Rajasthan</option><option value="SK">Sikkim</option><option value="TN">Tamil Nadu</option><option value="TS">Telangana</option><option value="TR">Tripura</option><option value="UK">Uttarakhand</option><option value="UP">Uttar Pradesh</option><option value="WB">West Bengal</option><option value="AN">Andaman and Nicobar Islands</option><option value="CH">Chandigarh</option><option value="DN">Dadra and Nagar Haveli</option><option value="DD">Daman and Diu</option><option value="DL">Delhi</option><option value="LD">Lakshadeep</option><option value="PY">Pondicherry (Puducherry)</option></select>
                                  </span>
                                </p>
                                <p className="form-row form-row-wide validate-required" id="calc_shipping_city_field">
                                  <input type="text" className="input-text" defaultValue placeholder="City" name="calc_shipping_city" id="calc_shipping_city" />
                                </p>
                                <p className="form-row form-row-wide validate-required" id="calc_shipping_postcode_field">
                                  <input type="text" className="input-text" defaultValue placeholder="Postcode / ZIP" name="calc_shipping_postcode" id="calc_shipping_postcode" />
                                </p>
                                <p><button type="submit" name="calc_shipping" value={1} className="button">Update</button></p>
                                <input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" defaultValue="7646af7808" /><input type="hidden" name="_wp_http_referer" defaultValue="/cart/" />  </section>
                            </form>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi>
                            <span className="woocommerce-Price-currencySymbol">₹</span>{total}</bdi></span></strong> </td>
                        </tr>
                      </tbody></table>
                    <div className="wc-proceed-to-checkout">
                      <div className="shiprocket-headless" data-type="cart">
                        <button  type="button" className="sr-headless-checkout checkout-button" id="checkoutBtn">
                          <div className="sr-d-flex flex-center">
                            <div className="sr-d-flex full-width flex-center">
                              <span>
                                Buy Now               </span>
                              <img src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/upi_options.svg" alt="Google Pay |                                 Phone Pay | UPI" className="sr-pl-15" /><img src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/right_arrow.svg" className="sr-pl-15" alt="right_arrow" />
                            </div>
                          </div>
                          <div>
                            <span className="sr-discount-label">
                            </span>
                            <span className="sr-powered-by">
                              <img src="https://fastrr-boost-ui.pickrr.com/assets/images/boost_button/powered_by.svg " alt="" />
                            </span>
                          </div>
                        </button>
                      </div>
                      {/*     </div> */}
                      <Link href="/checkout" className="checkout-button button alt wc-forward">
                        Proceed to checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
              <style dangerouslySetInnerHTML={{__html: "\n    \n .erf-checkbox-group .erf-checkbox-group-label{display:none !important;}\n" }} />
            </div>
          </div>
        </section>
    </>
  )
}

export default page