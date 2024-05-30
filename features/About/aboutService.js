import axios from "axios"
// import { json } from "react-router-dom"

const API_URL = process.env.API_URL
let config = {
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const AboutDetails = async () => {

    const response = await axios.get(API_URL + '/custom/v1/page/about', config)
    // console.log(response.data)
    return response.data
}

const HomeAboutSection = async () => {

    const response = await axios.get(API_URL + '/custom/v1/home/about-us', config)
    // console.log(response.data)
    return response.data
}

const aboutService = {
    AboutDetails,
    HomeAboutSection

}
export default aboutService