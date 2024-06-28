'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

function page() {
  const API_URL = process.env.API_URL || "";
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    state: '',
    product: '',
    quantity: '',
    Special_Request: ''
  });
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    
    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.company) errors.company = 'Company/Organization is required';
    if (!formData.email) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email Address is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone Number is invalid';
    }
    if (!formData.state) errors.state = 'State is required';
    if (!formData.product) errors.product = 'Product is required';
    if (!formData.quantity || formData.quantity < 20) errors.quantity = 'Minimum quantity is 20 units';

    return errors;
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      const response = await fetch(API_URL+'/api/bulk-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: formData })
      });
      // Form is valid, you can submit the form data here
      console.log('Form submitted successfully', formData);
      toast.success('Your Order is Successfully Placed')
      // router.push('/thank-you');
    } else {
      setSubmitted(false);
      // console.log('Form Error', errors);
      
    }
  };
  return (
   
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
          <form onSubmit={handleSubmit} className="wpcf7-form init">
      <div className="row">
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              size={40}
              placeholder="Enter Full Name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Company/Organization</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              size={40}
              placeholder="Company/Organization"
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              size={40}
              placeholder="Email Address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              size={40}
              placeholder="Phone Number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
              aria-required="true"
              aria-invalid="false"
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
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input_box_v2">
            <label>Product</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              size={40}
              placeholder="Product"
            />
            {errors.product && <span className="error">{errors.product}</span>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="input_box_v2">
            <label>Quantity: 20 unit minimum</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min={1}
              aria-invalid="false"
              placeholder="Product Quantity"
            />
            {errors.quantity && <span className="error">{errors.quantity}</span>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="input_box_v2">
            <label>Special Requests</label>
            <textarea
              name="Special_Request"
              value={formData.Special_Request}
              onChange={handleChange}
              cols={40}
              rows={10}
              placeholder="Special Request"
            />
          </div>
        </div>
      </div>
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
  </section>
</>

  
  )
}

export default page