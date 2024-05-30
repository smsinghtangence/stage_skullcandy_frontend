import axios from "axios"

const API_URL = process.env.API_URL


const fetchFAQ = async()=>{
    const response = await axios.get(API_URL+'/wp/v2/faqs')
    return response.data
}

const fetchFAQHeader = async()=>{
    const response = await axios.get(API_URL+'/custom/v1/page/faqs')
    return response.data
}
const faqService = {
    fetchFAQ,
    fetchFAQHeader
}

export default faqService