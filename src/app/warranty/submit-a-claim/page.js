import React from 'react'

function page() {
  return (
    <>
  <div className="container-fluid">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_breadcrumbs">
            <ul>
              <li>
                <a href="/support/">
                  Skullcandy Support
                </a>
              </li>
              <li>
                <a href="/support/warranty/">
                  Warranty.
                </a>
              </li>
              <li>Submit a Claim</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="full_center_section skull_space_xtra pb-5">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_search_bar">
              <form
                role="search"
                method="get"
                action="/"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="input_box_v2 search">
                      <input
                        type="search"
                        name="s"
                        id="s"
                        defaultValue=""
                        placeholder="Search the Skullcandy Help Center"
                      />
                      <svg
                        viewBox="0 0 22.922 22.158"
                        id="search"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <g
                          id="Group_762"
                          data-name="Group 762"
                          transform="translate(-1079.439 -1360.5)"
                        >
                          {" "}
                          <circle
                            id="Ellipse_174"
                            data-name="Ellipse 174"
                            className="cls-1"
                            cx="8.084"
                            cy="8.084"
                            r="8.084"
                            transform="translate(1079.939 1361)"
                          />{" "}
                          <line
                            id="Line_224"
                            data-name="Line 224"
                            className="cls-1"
                            x2="7.571"
                            y2="7.443"
                            transform="translate(1094.44 1374.859)"
                          />{" "}
                        </g>{" "}
                      </svg>
                      <input
                        type="hidden"
                        placeholder="Search"
                        name="page"
                        id="page"
                        defaultValue="page"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="full_center_section skull_space_xtra pt-5">
    <div className="container-fluid">
      <div className="container max_container">
        <div className="row m-0">
          <div className="col-md-12">
            <div className="skull_title big big_text mb-5 pb-3">
              <h2>Submit a Claim</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="support_content">
              <div
                role="form"
                className="wpcf7"
                id="wpcf7-f33350538-p1951-o1"
                lang="en-US"
                dir="ltr"
              >
                <div className="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                  <ul />
                </div>
                <form
                  action="/warranty/submit-a-claim/#wpcf7-f33350538-p1951-o1"
                  method="post"
                  className="wpcf7-form init"
                  encType="multipart/form-data"
                  noValidate="novalidate"
                  data-status="init"
                >
                  <div style={{ display: "none" }}>
                    <input
                      type="hidden"
                      name="_wpcf7"
                      defaultValue={33350538}
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_version"
                      defaultValue="5.6.3"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_locale"
                      defaultValue="en_US"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      defaultValue="wpcf7-f33350538-p1951-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      defaultValue={1951}
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      defaultValue=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Product Name</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="product_list"
                          >
                            <input
                              type="text"
                              name="product_list"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Product Name"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Purchase Date</label>
                        <p />
                        <p>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="purchase_date"
                          >
                            <input
                              type="date"
                              name="purchase_date"
                              defaultValue=""
                              className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Purchase Date"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Seller Name</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="seller_name"
                          >
                            <input
                              type="text"
                              name="seller_name"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Seller Name"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Bill Number</label>
                        <p />
                        <p>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="bill_number"
                          >
                            <input
                              type="number"
                              name="bill_number"
                              defaultValue=""
                              className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Bill Number"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_box_v2">
                        <label>Describe Your Product Issues</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="message"
                          >
                            <textarea
                              name="message"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Write your issue here"
                              defaultValue={""}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Your Name</label>
                        <p />
                        <p>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="fullname"
                          >
                            <input
                              type="text"
                              name="fullname"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Your Name"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Email Address</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email"
                          >
                            <input
                              type="email"
                              name="email"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Email Address"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>Phone Number</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="phone"
                          >
                            <input
                              type="tel"
                              name="phone"
                              defaultValue=""
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Phone Number"
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input_box_v2">
                        <label>State</label>
                        <p />
                        <p>
                          {" "}
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="state"
                          >
                            <select
                              name="state"
                              className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                            >
                              <option value="">---</option>
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
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
                              <option value="Jammu & Kashmir">
                                Jammu &amp; Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
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
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input_box_v2">
                        <label>Address</label>
                        <p />
                        <p>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="address"
                          >
                            <textarea
                              name="address"
                              cols={40}
                              rows={10}
                              className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Full Address"
                              defaultValue={""}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                    <p>
                      {" "}
                      {/*
<div className="col-md-12">
<div className="input_box_v2">
      <label>Upload Invoice</label></p>
<p><span className="wpcf7-form-control-wrap" data-name="invoice"><input type="file" name="invoice" size="40" className="wpcf7-form-control wpcf7-file" accept="audio/*,video/*,image/*" aria-invalid="false" /></span></p>
</div>
</div>
<p> */}
                    </p>
                  </div>
                  <p>
                    <i style={{ fontSize: 14, color: "#6c6c6c" }}>
                      Note: Please send GST invoice copy along with Product
                    </i>
                  </p>
                  <p>
                    {" "}
                    <input
                      type="submit"
                      defaultValue="Submit"
                      className="wpcf7-form-control has-spinner wpcf7-submit"
                    />
                    <span className="wpcf7-spinner" />{" "}
                  </p>
                  <div className="wpcf7-response-output" aria-hidden="true" />
                </form>
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

export default page