"use client";
import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { LoginRequest,geturl } from "@/utils/api"
import axios from "axios";
import { setCookie } from "nookies";
import { useDispatch, useSelector } from "react-redux";
import {
  loginWithGoogle,
  reset,
  userLogin,
  userRegister,
  loginWithFacebook as facebookLogin,
  verifyOtp,
} from "@/features/authSlice";
import {
  addToCartforGuestafterLogin,
  getCartData,
  getWishlist,
} from "@/features/Cart/cartnWishSlice";
import { toast } from "react-toastify";

function Signin() {
  const API_URL = process.env.API_URL || "";
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  ///

  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [test, setTest] = useState("");
  const [isMobileLogin, setIsMobileLogin] = useState(false);
  const [isOtpSend, setIsOtpSend] = useState(true);
  const [mobileError, setMobileError] = useState("");
  const { username, password: lpswd } = loginData;
  
  
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginMethod = (e) => {
    setIsMobileLogin(!isMobileLogin);
  };
  const validateMobileNumber = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };
  
  // const handleSendOtp = async (e) => {
  //   // debugger
  //   // if (!mobile || mobile.length !== 10) {
  //   //   alert("Please enter a valid 10-digit mobile number.");
  //   //   return;
  //   // }

  //   try {
  //     const response = await axios.post(
  //       "https://api.textlocal.in/send/",
  //       {
  //         email: email,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     toast.success("Otp Send Successfully");
  //     setTest(JSON.parse(response.config.data).mobile);
  //   } catch (error) {
  //     toast.error("Somthing Went Wrong");
  //     console.error("Login error:", error);
  //   } finally {
  //   }
  //   setIsOtpSend(false);
  // };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!validateMobileNumber(mobile)) {
      setMobileError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setMobileError("");

    try {
      const response = await axios.post(
        API_URL +"/api/send/otp",
        { mobile },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response, "OTP sent response");

      toast.success("OTP sent successfully");
      setIsOtpSend(false);
    } catch (error) {
      toast.error(error.response.data.error.message);
      console.error("OTP sending error:", error.response.data.error.message);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await axios.post(
        API_URL +"/api/resend-otp",
        { mobile },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("OTP Resend Successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.error("OTP sending error:", error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const loginItems = { mobile, otp };
    dispatch(verifyOtp(loginItems));
  };


  const Login = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginData));
  };

  const { users, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );

  if (users != undefined && users?.id) {
    dispatch(getCartData());
    dispatch(getWishlist());
    const Cart = JSON.parse(localStorage?.getItem("cart"));
    const lineItems = Cart?.map((item) => {
      return {
        product_id: item?.id,
        quantity: item?.quantity,
        SKU: item?.SKU,
        name: item?.name,
        Variations_Color_Name: item?.Variations_Color_Name,
        Variations_Price: item?.Variations_Price,
        Variant_Image_url: item?.Variant_Image_url,
        Sales_price: item?.Sales_price,
      };
    });
    // console.log("lineItems "+lineItems)
    if (Cart?.length != 0) {
      dispatch(addToCartforGuestafterLogin(lineItems));
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(`Welcome ${users?.username}`);
      // setPop(false)
      // setActive(false);
      // setError(" ");
      // setMsgError(" ");
      // hidePop()
    }
  //   //  alert(users?.id)
  //   //   if (users?.id) {

  //   //     alert("hi 12")
  //   //       dispatch(getCartData())
  //   //       dispatch(getWishlist())
  //   //       const Cart = JSON.parse(localStorage?.getItem('cart'))
  //   //       const lineItems = Cart?.map((item) => {
  //   //           return {
  //   //               "product_id": item?.id,
  //   //               "quantity": item?.quantity,
  //   //               "SKU": item?.SKU,
  //   //               "name": item?.name,
  //   //               "Variations_Color_Name": item?.Variations_Color_Name,
  //   //               "Variations_Price": item?.Variations_Price,
  //   //               "Variant_Image_url": item?.Variant_Image_url,
  //   //               "Sales_price": item?.Sales_price
  //   //           }
  //   //       })
  //   //       console.log("lineItems "+lineItems)
  //   //       if (Cart?.length != 0) {
  //   //           dispatch(addToCartforGuestafterLogin(lineItems))
  //   //       }

  //   //   }
  }, [users, isError, isSuccess]);

  return (
    <>
     <div className='row'>
     <div className="col-6">
           
           <h2>Login with Mobile OTP</h2>
            <form
          className="woocommerce-form woocommerce-form-login login"
          // onSubmit={(e) => e.preventDefault()}
          onSubmit={Login}
        >
            <label htmlFor="mobile">
              Mobile<span className="required">*</span>
            </label>
            <input
              className="woocommerce-form__input woocommerce-form__input-checkbox mb-4"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              name="mobile"
              type="tel"
              id="mobile"
              maxLength={10}
            />{" "}
            {mobileError && (
              <p className="error" style={{ color: 'red' }}>{mobileError}</p>
            )}
            {isOtpSend ? (
              ""
            ) : (
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label htmlFor="otp">
                  OTP&nbsp;<span className="required">*</span>
                </label>
                <span className="password-input">
                  <input
                    type="number"
                    name="otp"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <span className="show-password-input" />
                </span>
              </p>
            )}
           
                {isOtpSend ? (
                  <button
                    type="submit"
                    className="woocommerce-Button button woocommerce-form-login__submit"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="woocommerce-Button button woocommerce-form-login__submit"
                      onClick={handleVerifyOtp}
                    >
                      Verify OTP
                    </button>
                    <span onClick={handleResendOtp}>Resend OTP?</span>
                  </>
                )}
             
          
        </form>
       </div>

      <div className="col-6">
      <h2>Login</h2>
 

      
        <form
          className="woocommerce-form woocommerce-form-login login"
          // onSubmit={(e) => e.preventDefault()}
          onSubmit={Login}
        >
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="username">
              Mobile or email address&nbsp;
              <span className="required">*</span>
            </label>
            <input
              type="text"
              className="woocommerce-Input woocommerce-Input--text input-text"
              // onChange={e => setUsername(e.target.value) }
              value={username}
              onChange={handleLogin}
              name="username"
            />{" "}
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
                value={lpswd}
                onChange={handleLogin}
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
            </label>{" "}
           </p>
            <button
                  type="submit"
                  className="woocommerce-Button button woocommerce-form-login__submit"
                >
                  Log in
                </button>
                <p className="woocommerce-LostPassword lost_password">
                  <Link href="/sign-in/lost-password/">
                    Lost your password?
                  </Link>
                </p>
            
           
           </form>
           
           </div>
           







{/* //////////////////////////////////////////////////////// */}


        
       </div>
    </>
  );
}

export default Signin;
