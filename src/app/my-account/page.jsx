"use client"
import React from 'react'
import Link from 'next/link'
import Signin  from '@/components/Signin'
import Signup  from '@/components/Signup'
import { reset, userLogout } from '@/features/authSlice'
import Accountnav from '@/components/Accountnav'
import {
  addToCart,
  addToCartforGuestafterLogin,
  addToCartforLogin,
  reset as cartReset,
  getCartData,
  getWishlist,
} from "@/features/Cart/cartnWishSlice";
import { resetAllState, setCheckOutUserType } from "@/features/CheckOut/checkOutSlice";
 
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
function page() {
  
  const dispatch = useDispatch();
 
  const router = useRouter();
  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
  useSelector((state) => state.auth);




  const handleLogout = () => {
    
    const authMethod = localStorage.getItem('auth-method')
    
    dispatch(userLogout());
    dispatch(reset());
    dispatch(cartReset());
    dispatch(resetAllState()); //reset all cehckout state
    dispatch(setCheckOutUserType('guest'))
     
    router.push("/");
  };
  return (
    <>
  <section className="title_section">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          {users?.success || users?.id ? 
          <> <h2>WELCOME</h2></>
          : 
          
          <h2>SIGN IN </h2>}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>

  <div className="container-fluid">
      <div className="container max_container pb-3">
        <div className="woocommerce">
          <div className="woocommerce-notices-wrapper" />

          {users?.success || users?.id ? (
         <>
    


            <section>
  <div className="container-fluid">
  <h2 className='text-center'> {users?.username}</h2>
    <div className="container max_container pb-3">
      <p />
      <div className="woocommerce">
      <nav className="woocommerce-MyAccount-navigation">
          <ul>
            <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders is-active">
              <a href="/my-account/orders/">Orders</a>
            </li>
            <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders ">
              <Link href="/my-account/address">Addresses</Link>
            </li>
            <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders ">
              <Link href="/my-account/account-setting"> Account Settings </Link>
            </li>
            {/* <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders ">
              <a href="#">Wishlist</a>
            </li> */}
            <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders ">
              <Link href="/my-account/orderlookup"> Track your order </Link>
            </li>
            <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
              <a href="#"     onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
     
      </div>
     
    
    </div>
  </div>

  
</section>




         </>
         ):         
          <div className="u-columns col2-set" id="customer_login">
            <div className='row'>
            <div className='col-lg-6'>
            <div className="u-column1 ">
              <Signin />
            </div>
            </div>
            <div className='col-lg-6'>
            <div className="u-column2">
              <Signup />
            </div>
            </div>
            </div>
          </div>
}
        </div>
       
      </div>
    </div>




  </section>
</>

  )
}

export default page