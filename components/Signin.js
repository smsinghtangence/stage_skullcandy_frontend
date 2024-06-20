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
  const [otp, setOtp] = useState("");
  const [test, setTest] = useState("");
  const [isMobileLogin, setIsMobileLogin] = useState(false);
  const [isOtpSend, setIsOtpSend] = useState(true);
  const { username, password: lpswd } = loginData;
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginMethod = (e) => {
    setIsMobileLogin(!isMobileLogin);
  };

  const handleSendOtp = async (e) => {
    // debugger
    // if (!mobile || mobile.length !== 10) {
    //   alert("Please enter a valid 10-digit mobile number.");
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:1337/api/send/otp",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Otp Send Successfully");
      setTest(JSON.parse(response.config.data).mobile);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
    }
    setIsOtpSend(false);
  };

  const handleVerifyOtp = async (e) => {
    const loginItems = { email, otp };
    try {
      const response = await axios.post(
        `http://localhost:1337/api/verify-otp/`,
        loginItems,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    alert("OTP Verified Successfully");
    console.log(response.data.token,"ksjdghb.lkdfhblkxdjfnhbd,.jlfkyhbvkbdflkvbnh.kdfjhdlkfyhbg");
    localStorage.setItem("token", response.data.token);
    window.location.href ="/"
    } catch (error) {
      alert("OTP is not Verified");
      console.error("Verification error:", error);
    }
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
      setActive(false);
      setError(" ");
      setMsgError(" ");
      // hidePop()
    }
    //  alert(users?.id)
    //   if (users?.id) {

    //     alert("hi 12")
    //       dispatch(getCartData())
    //       dispatch(getWishlist())
    //       const Cart = JSON.parse(localStorage?.getItem('cart'))
    //       const lineItems = Cart?.map((item) => {
    //           return {
    //               "product_id": item?.id,
    //               "quantity": item?.quantity,
    //               "SKU": item?.SKU,
    //               "name": item?.name,
    //               "Variations_Color_Name": item?.Variations_Color_Name,
    //               "Variations_Price": item?.Variations_Price,
    //               "Variant_Image_url": item?.Variant_Image_url,
    //               "Sales_price": item?.Sales_price
    //           }
    //       })
    //       console.log("lineItems "+lineItems)
    //       if (Cart?.length != 0) {
    //           dispatch(addToCartforGuestafterLogin(lineItems))
    //       }

    //   }
  }, [users, isError, isSuccess]);

  return (
    <>
      {/* <div className="u-column1 col-1"> */}
      <h2>Login</h2>
      {isMobileLogin ? (
        <form
          className="woocommerce-form woocommerce-form-login login"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label htmlFor="email">
              Email&nbsp;
              <span className="required">*</span>
            </label>
            <input
              type="email"
              className="woocommerce-Input woocommerce-Input--text input-text"
              // onChange={e => setUsername(e.target.value) }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />{" "}
          </p>
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
            {isOtpSend ? (
              <button
                type="submit"
                className="woocommerce-Button button woocommerce-form-login__submit"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            ) : (
              <button
                type="submit"
                className="woocommerce-Button button woocommerce-form-login__submit"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            )}
            {/* <button
              type="submit"
              className="woocommerce-Button button woocommerce-form-login__submit"
              // onClick={() => Login()}
            >
              Log in
            </button> */}
          </p>
          <span className="loginmethod_btn" onClick={handleLoginMethod}>
            Login with Username & Password
          </span>
        </form>
      ) : (
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
            <input
              type="email"
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
            <button
              type="submit"
              className="woocommerce-Button button woocommerce-form-login__submit"

              // onClick={() => Login() }
            >
              Log in
            </button>
          </p>
          <p className="woocommerce-LostPassword lost_password">
            <Link href="/sign-in/lost-password/">Lost your password?</Link>
          </p>
          <span className="loginmethod_btn" onClick={handleLoginMethod}>
            Login with Email OTP
          </span>
        </form>
      )}
      {/* <form
        className="woocommerce-form woocommerce-form-login login"
        // onSubmit={(e) => e.preventDefault()}
        onSubmit={Login}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="username">
            Username or email address&nbsp;
            <span className="required">*</span>
          </label>
          <input
            type="email"
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
          <button
            type="submit"
            className="woocommerce-Button button woocommerce-form-login__submit"

            // onClick={() => Login() }
          >
            Log in
          </button>
        </p>
        <p className="woocommerce-LostPassword lost_password">
          <Link href="/sign-in/lost-password/">Lost your password?</Link>
        </p>
      </form> */}
      {/* </div> */}
    </>
  );
}

export default Signin;