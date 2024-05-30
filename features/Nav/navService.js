import axios from "axios"

const API_URL = process.env.API_URL

let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}
const fetchNavDetails    = async()=>{
    const response = await axios.get(API_URL +'/custom/v1/header/menu' , config)
    // console.log(response.data)
    return response.data
}

const navService = {
    fetchNavDetails
}

export default navService