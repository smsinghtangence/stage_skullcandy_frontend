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
 
import { useRouter,useSearchParams  } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
function Page() {
  
  const dispatch = useDispatch();
 
  const router = useRouter();
 
 


  const { users, isError, isSuccess, message, isLaoding, loginTimestamp } =
  useSelector((state) => state.auth);
  


  const searchParams = useSearchParams();
  const q= Object.fromEntries(searchParams.entries());

  const query = q?.r
  // console.log("Query "+ query)

  if (users?.id) {
    const redirectUrl = localStorage.getItem('redirectAfterLogin');
    // localStorage.removeItem('redirectAfterLogin');
    
    if (query!=undefined && query!="") {
      // router.push(redirectUrl);
      router.push(`/${query}`);
    } else {
      router.push('/my-account/orders');
    }
  }
  




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
          <>  
          <p className='text-center'><strong>WELCOME <br/> {users?.username}</strong></p>
          </>
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

export default Page