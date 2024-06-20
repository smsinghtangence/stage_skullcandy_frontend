'use client'
import Link from 'next/link'
import React, { useState } from 'react';
function page() {
  const [formData, setFormData] = useState({
    Product_Name: '',
    Purchase_Date: '',
    Seller_Name: '',
    Bill_Number: '',
    productIssues: '',
    Your_Name: '',
    email: '',
    Phone_Number: '',
    State: '',
    Address: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.Product_Name) errors.Product_Name = "Product Name is required";
    if (!formData.Purchase_Date) errors.Purchase_Date = "Purchase Date is required";
    if (!formData.Seller_Name) errors.Seller_Name = "Seller Name is required";
    if (!formData.Bill_Number) errors.Bill_Number = "Bill Number is required";
    if (!formData.productIssues) errors.productIssues = "Describe Your Product Issues is required";
    if (!formData.Your_Name) errors.Your_Name = "Your Name is required";
    if (!formData.email) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formData.Phone_Number) errors.Phone_Number = "Phone_Number Number is required";
    if (!formData.State) errors.State = "State is required";
    if (!formData.Address) errors.Address = "Address is required";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://13.126.252.23:8080/api/submit-a-claims/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    });
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Form is valid, you can submit the form data here
      console.log('Form submitted successfully', formData);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
  <div className="container-fluid">
    <div className="container max_container">
      <div className="row">
        <div className="col-md-12">
          <div className="skull_breadcrumbs">
            <ul>
              <li>
                <Link href="/support/">
                  Skullcandy Support
                </Link>
              </li>
              <li>
                <Link href="/support/warranty/">
                  Warranty.
                </Link>
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
                  <p role="status" aria-live="polite" aria-atomic="true" />
                  <ul />
                </div>
                <form onSubmit={handleSubmit}>
   
      <div className="row">
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Product Name</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="product_list">
                <input
                  type="text"
                  name="Product_Name"
                  value={formData.Product_Name}
                  onChange={handleChange}
                  size={40}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.Product_Name}
                  placeholder="Enter Product Name"
                />
              </span>
            </p>
            {errors.Product_Name && <p className="error">{errors.Product_Name}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Purchase Date</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="purchase_date">
                <input
                  type="date"
                  name="Purchase_Date"
                  value={formData.Purchase_Date}
                  onChange={handleChange}
                  className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date"
                  aria-required="true"
                  aria-invalid={!!errors.Purchase_Date}
                  placeholder="Purchase Date"
                />
              </span>
            </p>
            {errors.Purchase_Date && <p className="error">{errors.Purchase_Date}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Seller Name</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="seller_name">
                <input
                  type="text"
                  name="Seller_Name"
                  value={formData.Seller_Name}
                  onChange={handleChange}
                  size={40}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.Seller_Name}
                  placeholder="Enter Seller Name"
                />
              </span>
            </p>
            {errors.Seller_Name && <p className="error">{errors.Seller_Name}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Bill Number</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="bill_number">
                <input
                  type="number"
                  name="Bill_Number"
                  value={formData.Bill_Number}
                  onChange={handleChange}
                  className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number"
                  aria-required="true"
                  aria-invalid={!!errors.Bill_Number}
                  placeholder="Enter Bill Number"
                />
              </span>
            </p>
            {errors.Bill_Number && <p className="error">{errors.Bill_Number}</p>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="input_box_v2">
            <label>Describe Your Product Issues</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="message">
                <textarea
                  name="productIssues"
                  cols={40}
                  rows={10}
                  value={formData.productIssues}
                  onChange={handleChange}
                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.productIssues}
                  placeholder="Write your issue here"
                />
              </span>
            </p>
            {errors.productIssues && <p className="error">{errors.productIssues}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Your Name</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="Your_Name">
                <input
                  type="text"
                  name="Your_Name"
                  value={formData.Your_Name}
                  onChange={handleChange}
                  size={40}
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.Your_Name}
                  placeholder="Your Name"
                />
              </span>
            </p>
            {errors.Your_Name && <p className="error">{errors.Your_Name}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Email Address</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="email">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size={40}
                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  placeholder="Email Address"
                />
              </span>
            </p>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Phone_Number Number</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="Phone_Number">
                <input
                  type="tel"
                  name="Phone_Number"
                  value={formData.Phone_Number}
                  onChange={handleChange}
                  size={40}
                  className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                  aria-required="true"
                  aria-invalid={!!errors.Phone_Number}
                  placeholder="Phone_Number Number"
                />
              </span>
            </p>
            {errors.Phone_Number && <p className="error">{errors.Phone_Number}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>State</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="State">
                <select
                  name="State"
                  value={formData.State}
                  onChange={handleChange}
                  className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.State}
                >
                  <option value="">---</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
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
              </span>
            </p>
            {errors.State && <p className="error">{errors.State}</p>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="input_box_v2">
            <label>Address</label>
            <p />
            <p>
              <span className="wpcf7-form-control-wrap" data-name="Address">
                <textarea
                  name="Address"
                  cols={40}
                  rows={10}
                  value={formData.Address}
                  onChange={handleChange}
                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid={!!errors.Address}
                  placeholder="Full Address"
                />
              </span>
            </p>
            {errors.Address && <p className="error">{errors.Address}</p>}
          </div>
        </div>
      </div>
      <p>
        <i style={{ fontSize: 14, color: "#6c6c6c" }}>
          Note: Please send GST invoice copy along with Product
        </i>
      </p>
      <p>
        <input
          type="submit"
          value="Submit"
          className="wpcf7-form-control has-spinner wpcf7-submit"
        />
        <span className="wpcf7-spinner" />
      </p>
      <div className="wpcf7-response-output" aria-hidden="true" />
      {submitted && <p className="success">Form submitted successfully!</p>}
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