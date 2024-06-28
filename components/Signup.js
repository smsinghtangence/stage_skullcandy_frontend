'use client' 
import React from 'react'
import $ from 'jquery'
import { useEffect,useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify';

function Signup() {

  const API_URL =  process.env.API_URL || ''
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
      const registerInfo = {
          username: username,
          email: email,
          password: password
      }


      try {
        const registerResponse =  await axios.post(`${API_URL}/api/auth/local/register`,
        { 
          username: username,
          email: email,
          password: password
        });

        
        toast.success("Register Successfully");
    } catch (err) {
     
        toast.error(err.response.data.error.message);
      }
  
  }

    return(
        <>
         {/* <div className="u-column2 col-2"> */}
              <h2>Register</h2>
              <form
                method="post"
                className="woocommerce-form woocommerce-form-register register"
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_email">
                  Mobile&nbsp;<span className="required">*</span>
                  </label>
                  <input 
                  type="text" 
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  onChange={e => setUsername(e.target.value) } value={username} placeholder="Mobile"/>
                  {" "}
                </p>


                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_email">
                    Email address&nbsp;<span className="required">*</span>
                  </label>
                  <input type="email" 
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  onChange={e => setEmail(e.target.value) } 
                  value={email} 
                  placeholder="Email" />{" "}
                </p>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="reg_email">
                    Password&nbsp;<span className="required">*</span>
                  </label>
                  <input type="password" 
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  onChange={e => setPassword(e.target.value) } 
                  value={password} 
                  placeholder="Password"/>{" "}
                </p>

               

                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>


                <div className="woocommerce-privacy-policy-text">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <a
                      href=""
                      className="woocommerce-privacy-policy-link"
                      target="_blank"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
                <p className="woocommerce-form-row form-row">
                  <input
                    type="hidden"
                    id="woocommerce-register-nonce"
                    name="woocommerce-register-nonce"
                    defaultValue="e583ae1212"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    defaultValue="/my-account/orders/"
                  />{" "}
                  

                  <button 
                  type="button" 
                  className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                  onClick={() => handleRegister() }
                  >Register</button>
                </p>
              </form>
            {/* </div> */}
        </>
    )
}

export default Signup