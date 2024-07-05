'use client'
import CartContainer from '@/components/CartContainer'
import CartContainer2 from '@/components/CartContainer2'
import { payWithCardReset } from '@/features/CheckOut/checkOutSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'


function Page() {

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
        // dispatch(payWithCardReset())
    }, [])


  //   const total = cart?.reduce((p, c) => {
  //     return parseFloat(p + c.price * c.quantity)
  // }, [0])
  let total = 0;
  if(cart?.length > 0 )
     {
      
      total = cart?.reduce((totalPrice, i) => {
    
    let sku = i?.SKU
              
    // let activeSlide = (i?.Variation_Sliders)?.find(product => product?.SKU === sku)
     
      let quantity = i?.quantity
  
      // let price = activeSlide?.Sales_price ? activeSlide?.Sales_price :activeSlide?.Variations_Price;
      let price = i?.Sales_price ? i?.Sales_price :i?.Variations_Price;
    
    return parseFloat(totalPrice + price * quantity);
  }, 0);

  }




  return (
    <>

      <div className="breacrumb-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ol class="breadcrumbs">
                <li>
                  <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.867 10">
                    <path id="Path_325" data-name="Path 325" d="M6.243,3.05C5.931,2.2,8,0,4.2,0,.946,0,.641,3.215.5,3.463a2.828,2.828,0,0,0-.467.94c-.089.413,0,.872.267.872.4,0-.089-.8.4-.8.623,0,1.358,1.009,1.558,1.582-.334.6-.8.986-1.135.827a1.016,1.016,0,0,1-.69-.918c0-.369-.344-.357-.311.114a1.753,1.753,0,0,0,.8,1.354A4.342,4.342,0,0,1,2.148,8.967c.152.377.356.551.913.551s.133.482.512.482.156-.529.378-.529,0,.505.423.505c.645,0,.356-.8.557-.941S7.912,7.43,7.867,5.619C7.823,3.831,6.554,3.9,6.243,3.05ZM3.527,8.165A1.3,1.3,0,0,0,2.5,8.05c-.245.091-.489-.046-.289-.666a3.442,3.442,0,0,1,.4-.894A14.466,14.466,0,0,1,3.95,8.1C3.972,8.279,3.683,8.348,3.527,8.165ZM5.419,7.133A1.491,1.491,0,1,1,6.866,5.641,1.469,1.469,0,0,1,5.419,7.133Z" transform="translate(0)"></path>
                  </svg></Link>
                </li>
                <li>Your Shopping Cart </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className='cart-page'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-heading-blk">
                <h1>Your Bag</h1>
                <Link href="/archive">Continue shopping</Link>
              </div>
              <div className="cart-table table-responsive">
                <table className='cart-items '>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
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
                  
                 
                 
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="cart-subtotal-blk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-subtotal">
                <div className="total">
                  <h4 className='subtotal-text'>Subtotal</h4>
                  <p className='subtotal-value'><i className="fa fa-rupee"></i>{total}</p>
                </div>
                <p className='tax-note'>Taxes and shipping calculated at checkout </p>
                <Link href="#" className='cart-checkout'>Checkout</Link>
                <div className="dynamic-cart">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     


    </>
  )
}

export default Page