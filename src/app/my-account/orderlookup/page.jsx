import React from 'react'
import Accountnav from '@/components/Accountnav'
function Page() {
  return (
    <>
 <Accountnav active={"Track"}/>
 <section className="skull_space">
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 skull_lr_space">
          <div className="skul_content_section text-center">
            <div className="skull_title_2 big_text">
              <h2>ORDER STATUS &amp; RETURNS</h2>
              <p>Please enter your order id to track your order.</p>
            </div>
            <p className="error-field" />
            <div className="col-md-6 offset-md-3 p-0">
              <div className="row">
                <div className="col-md-12">
                  <div id="pickrr-tracking-container">
                    <div id="pickrr-tracking-radio-group input_box_v2 min_space">
                      <input
                        type="radio"
                        id="client_order_id"
                        name="pickrr-query-type"
                        defaultValue="client_order_id"
                        className="d-none"
                        defaultChecked=""
                      />
                    </div>
                    <input
                      id="pickrr-tracking-input"
                      data-id={124781}
                      placeholder="Enter Order ID"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="input_box_v2 min_space">
                    <button id="pickrr-tracking-btn" className="theme_btn blue">
                      CHECK STATUS
                    </button>
                  </div>
                </div>
              </div>
            </div>
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