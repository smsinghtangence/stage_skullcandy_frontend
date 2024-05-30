import React from 'react'
import Link from 'next/link'
import InnerPageSearch from '@/components/InnerPageSearch'
function page() {
  return (

    <>
  <div className="black_bg">

<InnerPageSearch/>
  </div>
  <section className="full_center_section black_bg skull_space  support_blocks">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/support/product-help">
                <h3>PRODUCT HELP.</h3>
                <p>
                  Setup videos, user guides, and troubleshooting information.
                </p>
                <h5>PRODUCT HELP.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/orderlookup">
                <h3>ORDER STATUS.</h3>
                <p>Order status and tracking.</p>
                <h5>ORDER STATUS.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/support/warranty">
                <h3>WARRANTY. </h3>
                <p> How to submit a warranty claim.</p>
                <h5>WARRANTY.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/order-information/refunds-returns">
                <h3>RETURNS.</h3>
                <p>Returns and refund policy.</p>
                <h5>RETURNS.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/contact-us">
                <h3>Contact Skullcandy.</h3>
                <p>How to get in touch with customer service in your region.</p>
                <h5>Contact Skullcandy.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/order-information/ordering-information">
                <h3>Ordering Information.</h3>
                <p>Billing, shipping, and ordering information.</p>
                <h5>Ordering Information.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/support/skull-registration">
                <h3>Registration.</h3>
                <p>Register your Skullcandy product.</p>
                <h5>Registration.</h5>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-12">
            <div className="help_block">
              <Link href="/support/legal">
                <h3>LEGAL.</h3>
                <p>Legal information.</p>
                <h5>LEGAL.</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default page