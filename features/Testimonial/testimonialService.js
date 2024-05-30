import axios from "axios"
const API_URL = process.env.API_URL;
let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}

const fecthTestimonial = async()=>{
    const response = await axios.get(API_URL + "/wp/v2/testimonials",config)
   return response.data
}


const testimonialService = {
    fecthTestimonial
}

export default testimonialService