import axios from "axios"
// import { json } from "react-router-dom"

const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
// const DATACENTER = process.env.VITE_API_KEY.split("-")[1];
// const dc = process.env.VITE_DC
// const audienceId = process.env.VITE_AUDIENCE_ID

const subscribeUs = async (email) => {
   
    const response = await axios.post(API_URL + `/custom/v1/form/newsletter?email=${email}`,config)
     //console.log(response.data)
    return response.data
}

const newsLetterService = {
    subscribeUs

}
export default newsLetterService