'use client'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

function page() {
  const API_URL = process.env.API_URL || "";

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL +'/api/forget-password', {
        email,
      });
      setMessage('Password reset email sent. Please check your inbox.');
      toast.success('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('An error occurred:', error.response);
      setMessage('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.')
    }
  };





  return (
    <>
  <section className="title_section">
    <div className="conatiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>RESET PASSWORD</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="container max_container pb-3">
        
        <p />
        <div className="woocommerce">
          <div className="woocommerce-notices-wrapper" />
          <form
          onSubmit={handleForgotPassword}
             
            className="woocommerce-ResetPassword lost_reset_password"
          >
            <p>
              Lost your password? Please enter your email address.
              You will receive a link to create a new password via email.
            </p>
            <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
              <label htmlFor="user_login">Email</label>
             
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="woocommerce-Input woocommerce-Input--text input-text"
               
          />
            </p>
            <div className="clear" />
            <p className="woocommerce-form-row form-row">
               
              <button
                type="submit"
                className="woocommerce-Button button"
                value="Reset password"
              >
                Reset password
              </button>
            </p>
             
            {message && <p>{message}</p>}

          </form>
        </div>
        <br />
        {/* /wp:shortcode <br /> [erforms_account_verification]  */}
        <p />
       
      </div>
    </div>
  </section>
</>

  )
}

export default page