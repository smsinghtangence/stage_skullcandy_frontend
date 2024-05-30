import axios from "axios"
const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const fetchContact = async () => {

    const response = await axios.get(API_URL + '/custom/v1/page/contact-us', config)
    //console.log(response.data)
    return response.data
}

const submitContactForm = async (data) => {
    const response = await axios.post(API_URL + '/custom/v1/form/contact-us',data, config)
    // console.log(response.data)
    return response.data
}
const contactService = {
    fetchContact,
    submitContactForm
}
export default contactService