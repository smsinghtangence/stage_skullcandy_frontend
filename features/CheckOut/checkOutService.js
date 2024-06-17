import axios from "axios"
const API_URL = process.env.API_URL
const TOKEN = process.env.TOKEN || '';
 
let config = {
   // headers: {
   //    "consumer-secret": process.env.VITE_SECRET,
   //    "consumer-key": process.env.VITE_KEY,
   //  },
   headers:{
      "Authorization": `Bearer ${TOKEN}`
   }
}
const verifyCoupon = async (code) => {
   const response = await axios.get(API_URL + `/wc/v3/coupons?code=${code}`, config)
   return response.data
}

const fetchCoupon= async()=>{
const response =await axios.get(API_URL + '/custom/v1/coupon',config)
return response.data
}
const fetchState = async () => {

   const response = await axios.get(API_URL + '/wc/v3/data/countries/in', config)
   return response.data
}

const createOrder = async (shippingObj,users) => {
   const response = await axios.post(API_URL + '/api/orders', {"data":shippingObj}, {headers:{
      "Authorization": `Bearer ${users?.token}`}})
   return {...shippingObj,ref_order_id:response?.data?.data?.id}
}

const getAddress = async (users) => {
   const response = await axios.get(API_URL + `/api/users/me?populate=*`, {headers:{
      "Authorization": `Bearer ${users?.token}`
   }})
   return response.data
}

const saveAddress = async (address, shipping,users) => {
//    let data_shipping1 = [...address]
//    console.log("address " +JSON.stringify(data_shipping1))
//   let data_shipping = data_shipping1?.forEach(obj => {
//       // Check if the object has an 'id' property
//       if (obj.hasOwnProperty('id')) {
//           // Delete the 'id' property
//           delete obj.id;
//       }
//       // if ('id' in obj) {
//       //    delete obj.id;
//       // }
//   });

//   console.log("data_shipping " +JSON.stringify(data_shipping))
  
//   if (Array.isArray(data_shipping)) {
//    // If `myArray` is an array, append `newObject` to it
//    data_shipping.push(shipping);
// } else {
//    // If `myArray` is not an array, initialize it as an array containing `newObject`
//    data_shipping = [shipping];
// }
// //   const filteredData = data_shipping?.filter(obj => Object.keys(obj).length !== 0);

// console.log("data_shipping " +JSON.stringify(data_shipping))
  

  let address_array = {  
   "id": users.id,
   "Company_Name":shipping?.Company_Name,
   "GSTIN":shipping?.GSTIN ,
   "Address":[...address,shipping]  
}
   // let address_array = {  "id": users.id,"Address":[{...data_shipping}]  }
 

 
   //    const response = await axios.put(API_URL + `/api/user/me`, {address}, {headers:{
   //       "Authorization": `Bearer ${users?.token}`
   // }})

   if (users?.id) {
      const response = await axios.put(API_URL + `/api/users/${users.id}`, {...address_array}, {headers:{
          "Authorization": `Bearer ${users?.token}`
      }})
      if(response.status == 200) {
        
         const response = await  getuserData(users)
         return response
     }
     else
     return response.data
   }


   else
   return {"err":"Unauthorized"}
   
}
const getuserData = async (users) => {
   const response = await axios.get(API_URL + `/api/users/me?populate=*`, {headers:{
      "Authorization": `Bearer ${users?.token}`
   }})
   return response.data
}
const updateAddress = async (users , id) => {
   // const response = await axios.put(API_URL + `/api/users/${users?.id}`, address, {headers:{
   //    "Authorization": `Bearer ${users?.token}`
   // const response = await axios.put(API_URL + `/api/user/me`, {"data":address}, {headers:{
   //    "Authorization": `Bearer ${users?.token}`
   //   }})

 
   // return response.data

   // if (users?.id) {
   //    const response = await axios.put(API_URL + `/api/users/${users.id}`, {...address}, {headers:{
   //        "Authorization": `Bearer ${users?.token}`
   //    }})
   //    if(res.status == 200) {
        
   //       const response = await  getuserData(users)
   //       return response.Cart
   //   }
   //   else
   //   return res.data
   // }


   // else
   return {"err":"Unauthorized"}

} 
const updateAddressDetails = async(addressId,shipping)=>{
   // console.log(addressId,shipping)
   const response = await axios.put(API_URL + `/custom/v1/update/address-book/${addressId}`,shipping,config)
   return response.data
}
const deleteAddress = async(addressId,userId)=>{
   let config = {
      headers: {
         "consumer-secret": process.env.VITE_SECRET,
         "consumer-key": process.env.VITE_KEY,
       },
       data: {
         "user_id": userId
     }
   }
   const response = await axios.delete(API_URL + `/custom/v1/delete/address-book/${addressId}`,config)
   return {
      id : addressId,
      data : response.data
   }
}
const PaymentWithCard  = async(data)=>{
   // console.log(data)
   const response = await axios.post(API_URL + '/api/razorpay' , data,config)
   return response.data
}

const updateOrderAfterPayment = async(id,data)=>{
//   console.log(id,data)
   const response = await axios.put(API_URL+`/api/orders/${id}`,{"data":data},config)
   // const payment_found = await axios.get(API_URL+`/api/payment-details/${id}`,data,config)
    
   // if(payment_found?.data != null)
   // {
   //   const response1 = await axios.put(API_URL+`/api/payment-details/${id}`,data,config)

   // }
   // else{
   //   const response1 = await axios.post(API_URL+`/api/payment-details`,data,config)

   // }
    
   
   // return {...response.data,...response1.data}
   return {"ref_order_id":response.data.data.id,...response.data.data.attributes}
}
const checkoutService = {
   verifyCoupon,
   fetchCoupon,
   fetchState,
   createOrder,
   getAddress,
   saveAddress,
   updateAddress,
   deleteAddress,
   updateAddressDetails,
   PaymentWithCard,
   updateOrderAfterPayment
}

export default checkoutService