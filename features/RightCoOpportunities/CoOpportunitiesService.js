import axios from "axios"
// import { json } from "react-router-dom"

const API_URL =process.env.API_URL
let config ={
  //  headers: {
  //      "consumer-secret": process.env.VITE_SECRET,
  //      "consumer-key": process.env.VITE_KEY,
  //    },
}
const fetchOppotunityDetails = async()=>{
    console.log('from service')
    const response = await axios.get(API_URL+ '/custom/v1/page/opportunities',config)
   console.log(response.data)
   return response.data
 }

 const oppotunityService = {
    
    fetchOppotunityDetails
    
}
 export default oppotunityService