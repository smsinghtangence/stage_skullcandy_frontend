import axios from "axios"
const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const Subscribe = async (data) => {

    const response = await axios.post(API_URL + '/custom/v1/form/subscribers',data,config)
    console.log(response.data)
    return response.data
}
const subscribeService = {
    Subscribe
}
export default subscribeService