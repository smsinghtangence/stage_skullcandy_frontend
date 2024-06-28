"use client";
import axios from "axios";
let config = {
  headers: {
    // "consumer-secret": process.env.VITE_SECRET,
    // "consumer-key": process.env.VITE_KEY,
  },
};
const API_URL = process.env.API_URL;
const BASE_URL = process.env.BASE_URL;
const userRegister = async (userData) => {
  const response = await axios.post(BASE_URL + "/wc/v3/customers", userData);

  localStorage.setItem(
    "user",
    JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
  );
  localStorage.setItem("loginTime", Date.now());
  return response.data;
};

const userLogin = async (userData) => {
  const response = await axios.post(BASE_URL + "/api/auth/local", {
    identifier: userData.username,
    password: userData.password,
  });
  // console.log(JSON.stringify(response))

  // const ruser = response?.user ?? {};
  // const rtoken = response?.jwt ?? '';
  // const res = { ...ruser, "token": rtoken };

  response.status == 200
    ? localStorage.setItem(
        "user",
        JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
      )
    : null;

  response.status == 200 ? localStorage.setItem("loginTime", Date.now()) : null;

  return response.data;
};

const verifyOtp = async (loginItems) => {
  const response = await axios.post(`${BASE_URL}/api/verify-otp`, loginItems, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  response.status == 200
    ? localStorage.setItem(
        "user",
        JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
      )
    : null;

  response.status == 200 ? localStorage.setItem("loginTime", Date.now()) : null;
  return response.data;
};

const verifyGuestVerifyOtp = async (loginItems) => {
  const response = await axios.post(
    BASE_URL + "/api/guest/verify/otp",
    loginItems,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  response.status == 200
    ? localStorage.setItem(
        "user",
        JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
      )
    : null;

  response.status == 200 ? localStorage.setItem("loginTime", Date.now()) : null;
  return response.data;
};

const verifyGuestRegister = async (userData) => {
  try {
    const response = await axios.post(
      BASE_URL + "/api/guest/checkouts",
      userData
    );
    // You can handle additional logic here if needed
    return response.data;
  } catch (error) {
    if (
      error.response.status === 400 &&
      error.response.data.code === "guest_registration_failure_user_exists"
    ) {
      throw new Error("Guest registration failed: User already exists");
    } else {
      throw error;
    }
  }
};

const resendOtp = async (resndItems) => {
  const res = await axios.post(BASE_URL + "/api/resend-otp", resndItems);
};

const forgotPassword = async (email) => {
  const response = await axios.post(
    API_URL + "/custom/v1/forgot-password",
    { user_email: email },
    config
  );
  return response.data;
};
const userLogout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("loginTime");
};

const updatePassword = async (data) => {
  const response = await axios.post(
    API_URL + "/custom/v1/update-password",
    data,
    config
  );
  return response.data;
};

export const loginWithGoogle = async (token) => {
  const response = await axios.post(
    API_URL + `/custom/v1/google-signin?access_id=${token}`,
    config
  );
  response.status == 200
    ? localStorage.setItem(
        "user",
        JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
      )
    : null;
  response.status == 200 ? localStorage.setItem("loginTime", Date.now()) : null;
  return response.data;
};

export const loginWithFacebook = async (token) => {
  const response = await axios.post(
    API_URL + `/custom/v1/facebook-signin?access_id=${token}`,
    config
  );
  response.status == 200
    ? localStorage.setItem(
        "user",
        JSON.stringify({ ...response?.data?.user, token: response?.data?.jwt })
      )
    : null;
  localStorage.setItem("auth-method", "facebook");
  response.status == 200 ? localStorage.setItem("loginTime", Date.now()) : null;
  return response.data;
};
const authService = {
  userRegister,
  userLogin,
  userLogout,
  forgotPassword,
  updatePassword,
  loginWithGoogle,
  loginWithFacebook,
  verifyOtp,
  verifyGuestRegister,
  verifyGuestVerifyOtp,
};

export default authService;
