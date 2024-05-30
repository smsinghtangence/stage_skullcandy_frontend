import React from 'react'
import Accountnav from '@/components/Accountnav'
function page() {
  return (
    <>
    
       <Accountnav/> 
        <div className="container">
        <div className="woocommerce-MyAccount-content">
          <div className="woocommerce-notices-wrapper " />
          <div className="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info order-row">
            <a
              className="woocommerce-Button button"
              href="#"
            >
              Browse products
            </a>
            No order has been made yet.{" "}
          </div>
        </div>
        </div>
    </>
  )
}

export default page