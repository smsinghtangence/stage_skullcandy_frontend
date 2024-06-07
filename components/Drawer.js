'use client'
import DrawerCartContainer from '@/components/DrawerCartContainer'
import DrawerCartContainer2 from '@/components/DrawerCartContainer2'
import { payWithCardReset } from '@/features/CheckOut/checkOutSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'


function Drawer() {

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
  
      // let price = activeSlide?.sales_price ? activeSlide?.sales_price :activeSlide?.Variations_Price;
      let price = i?.sales_price ? i?.sales_price :i?.Variations_Price;
    
    return parseFloat(totalPrice + price * quantity);
  }, 0);

  }
  return (
   <>

   <section className="drawer">
        <div className="drawer-content">
         
          <div className="drawer-header">
          <h2>Your Bag</h2>
          <span className="drawer-close">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-close" fill="none" viewBox="0 0 30 30">
              <g data-name="Ellipse 40" fill="#000" stroke="#000" strokeWidth="2">
                <circle cx="15" cy="15" r="15" stroke="none"></circle>
                <circle cx="15" cy="15" r="14" fill="none"></circle>
              </g>
              <line data-name="Line 92" y2="20" transform="translate(22.57 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" strokeWidth="2"></line>
              <line data-name="Line 93" x2="20" transform="translate(8.43 8.429) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" strokeWidth="2"></line>
            </svg>
          </span>
          </div>

          <div className="drawer-body">


            {/* /////////////////////////////////// */}
         {  cart?.length > 0 ?

            
             
                  <>                                {  login === true ? <>
                                                        {
                                                            cart?.map((i, index) => (
                                                                <DrawerCartContainer i={i} key={index} />))

                                                                // <DrawerCartContainer2 i={i} key={index} /> ))                                                             ))
                                                        } </> : <>
                                                        {
                                                            cart?.map((i, index) => (
                                                                <DrawerCartContainer2 i={i} key={index} />
                                                            ))


                                                        }
                                                    </>
             
                                                       } </>
             :""
}
            {/* /////////////////////////////////////////////////// */}

          </div>

          <div className="drawer-footer">
            <div className="sub-total">
              <h4>Subtotal</h4>
              <span className="subtotal-value"><i class="fa fa-rupee"></i>{total}</span>
            </div>
            <p>Taxes and <Link href="#">shipping</Link> calculated at checkout </p>
            <Link href="/checkout" className='CartDrawer-Checkout'>Checkout</Link>
          </div>


        </div>
      </section>
   
   </>
  )
}

export default Drawer