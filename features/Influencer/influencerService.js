import axios from "axios"
// import { json } from "react-router-dom"

const API_URL =process.env.API_URL
let config ={
   // headers: {
   //     "consumer-secret": process.env.VITE_SECRET,
   //     "consumer-key": process.env.VITE_KEY,
   //   },
}
const addInfluencer = async(data)=>{
   // console.log(data)
    const response = await axios.post(API_URL+ '/custom/v1/influencer',data,config)
   // console.log(response.data)
   return response.data
 }

 const getInfluencerRewards = async()=>{
  const response = await axios.get(API_URL+'/custom/v1/page/influencer')
  return response.data
 }

 const influencerService = {
    
    addInfluencer,
    getInfluencerRewards
    
}
 export default influencerService