'use client' 
import React from 'react'
import $ from 'jquery'
import { useEffect,useState } from 'react'
import Link from 'next/link'
// import { LoginRequest,geturl } from "@/utils/api"
import axios from 'axios'
import { setCookie } from 'nookies'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithGoogle, reset, userLogin, userRegister, loginWithFacebook as facebookLogin } from '@/features/authSlice'
function Signin() {

    const API_URL =  process.env.API_URL || ''
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
  
///
 
const dispatch = useDispatch()
const [loginData, setLoginData] = useState({
  "username": '', "password": ''
})
const { username, password: lpswd } = loginData
const handleLogin = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value })
}
   
  



  const Login = (e) => {
    e.preventDefault()
    dispatch(userLogin(loginData))

}









    // async function handleLogin() {


        

       
    //     const loginResponse =  await axios.post(`${API_URL}/api/auth/local`,
    //     { 
    //         identifier: username,
    //         password: password
    //     });
        
////
        // const loginResponse = await login.json();

        // console.log(loginResponse.data)

        // setCookie(null, 'jwt', loginResponse.data.jwt , {
        //     maxAge: 30 * 24 * 60 * 60,
        //     path: '/',
        // })

        // Router.push('/payed-articles')
    // }



    return(
        <>
        {/* <div className="u-column1 col-1"> */}
              <h2>Login</h2>
              <form
                className="woocommerce-form woocommerce-form-login login"
                // onSubmit={(e) => e.preventDefault()}
                onSubmit={Login}
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="username">
                    Username or email address&nbsp;
                    <span className="required">*</span>
                  </label>
                  
                  
                  <input type="email" 
                  className="woocommerce-Input woocommerce-Input--text input-text"
                  // onChange={e => setUsername(e.target.value) }  
                  value={username} onChange={handleLogin}
                  name='username'
                 />
                  
                  {" "}
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label htmlFor="password">
                    Password&nbsp;<span className="required">*</span>
                  </label>
                  <span className="password-input">
                    
                    
                    <input 
                    type="password" 
                    name="password" 
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    value={lpswd} onChange={handleLogin}
                    // onChange={e => setPassword(e.target.value) } 
                    // value={password} 
                    />

                    <span className="show-password-input" />
                  </span>
                </p>
                <p className="form-row">
                  <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                    <input
                      className="woocommerce-form__input woocommerce-form__input-checkbox"
                      name="rememberme"
                      type="checkbox"
                      id="rememberme"
                      defaultValue="forever"
                    />{" "}
                    <span>Remember me</span>
                  </label>
                 {" "}
                  <button
                    type="submit"
                    className="woocommerce-Button button woocommerce-form-login__submit"
                  
                   
                    // onClick={() => Login() }
                  >
                    Log in
                  </button>
                </p>
                <p className="woocommerce-LostPassword lost_password">
                  <Link href="/sign-in/lost-password/">
                    Lost your password?
                  </Link>
                </p>
              </form>
            {/* </div> */}
        </>
    )
}

export default Signin