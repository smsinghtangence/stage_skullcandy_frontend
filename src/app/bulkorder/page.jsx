import React from 'react'

function page() {
  return (
    <>
    <>
  <section className="title_section">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Bulkorder </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container max_container pb-3">
        <p>
          To begin the Skullcandy Bulk Order process, please fill out and submit
          the form below. Once submitted, you will receive an email response
          from Skullcandy within 3 business days.
        </p>
        <div
          role="form"
          className="wpcf7"
          id="wpcf7-f24847281-p543-o1"
          lang="en-US"
          dir="ltr"
        >
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
          </div>
          <form action="" method="post" className="wpcf7-form init">
            <div className="row">
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    defaultValue=""
                    size={40}
                    placeholder="Enter Full Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    defaultValue=""
                    size={40}
                    placeholder="Company/Organization"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>Email Address</label>
                  <p />
                  <input
                    type="email"
                    name="email"
                    defaultValue=""
                    size={40}
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>Phone Number</label>
                  <p />
                  <input
                    type="tel"
                    name="phone"
                    defaultValue=""
                    size={40}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>State</label>
                  <p />
                  <p>
                    {" "}
                    <span className="wpcf7-form-control-wrap" data-name="state">
                      <select
                        name="state"
                        className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                      >
                        <option value="">---</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_box_v2">
                  <label>Product</label>
                  <p />
                  <input
                    type="text"
                    name="product_list"
                    defaultValue=""
                    size={40}
                    placeholder="Product"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_box_v2">
                  <label>Quantity: 20 unit minimum</label>
                  <p />
                  <input
                    type="number"
                    name="quantity"
                    defaultValue=""
                    min={1}
                    aria-invalid="false"
                    placeholder="Product Quantity"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_box_v2">
                  <label>Special Requests</label>
                  <p />
                  <textarea
                    name="message"
                    cols={40}
                    rows={10}
                    placeholder="Special Request"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <p>
              {" "}
              <input
                type="submit"
                defaultValue="Submit"
                className="wpcf7-form-control has-spinner wpcf7-submit submit"
              />
              <span className="wpcf7-spinner" />{" "}
            </p>
            <div className="wpcf7-response-output" aria-hidden="true" />
          </form>
        </div>
      
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default page