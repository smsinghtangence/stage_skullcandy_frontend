import axios from "axios"

const API_URL = process.env.API_URL

let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}
const fetchFooterDetails    = async()=>{
    const response = await axios.get(API_URL +'/custom/v1/get/footer' , config)
    return response.data
}

const footerService = {
    fetchFooterDetails
}

export default footerService