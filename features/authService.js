"use client"
import axios from "axios"
let config = {
   headers: {
      // "consumer-secret": process.env.VITE_SECRET,
      // "consumer-key": process.env.VITE_KEY,
   },
}
const API_URL = process.env.API_URL;
const userRegister = async (userData) => {
   const response = await axios.post(API_URL + '/wc/v3/customers', userData)
    
localStorage.setItem('user', JSON.stringify({...response?.data?.user,"token":response?.data?.jwt}));
   localStorage.setItem('loginTime', Date.now())
   return response.data
}



const userLogin = async (userData) => {



   const response = await axios.post(API_URL + '/api/auth/local', 
   {"identifier":userData.username,
   "password":userData.password
   }
      )
      // console.log(JSON.stringify(response))

      
      

      // const ruser = response?.user ?? {};
      // const rtoken = response?.jwt ?? '';
      // const res = { ...ruser, "token": rtoken };


   response.status == 200 ? localStorage.setItem('user', JSON.stringify({...response?.data?.user,"token":response?.data?.jwt})) : null



   response.status == 200 ? localStorage.setItem('loginTime', Date.now()) : null
   return response.data
}

const forgotPassword = async (email) => {
   const response = await axios.post(API_URL + '/custom/v1/forgot-password', { user_email: email }, config)
   return response.data
}
const userLogout = async () => {
   localStorage.removeItem('user')
   localStorage.removeItem('loginTime')
}

const updatePassword = async (data) => {
   const response = await axios.post(API_URL + '/custom/v1/update-password', data, config)
   return response.data
}

export const loginWithGoogle = async (token) => {
   const response = await axios.post(API_URL + `/custom/v1/google-signin?access_id=${token}`,config)
   response.status == 200 ? localStorage.setItem('user', JSON.stringify({...response?.data?.user,"token":response?.data?.jwt})) : null
   response.status == 200 ? localStorage.setItem('loginTime', Date.now()) : null
   return response.data
}

export const loginWithFacebook = async(token)=>{
   const response = await axios.post(API_URL + `/custom/v1/facebook-signin?access_id=${token}`,config)
   response.status == 200 ? localStorage.setItem('user', JSON.stringify({...response?.data?.user,"token":response?.data?.jwt})): null
   localStorage.setItem('auth-method','facebook')
   response.status == 200 ? localStorage.setItem('loginTime', Date.now()) : null
   return response.data
}
const authService = {
   userRegister,
   userLogin,
   userLogout,
   forgotPassword,
   updatePassword,
   loginWithGoogle,
   loginWithFacebook
}

export default authService