import axios from "axios"
const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const PopUpDetails = async () => {

    const response = await axios.get(API_URL + '/custom/v1/page/popup-shop', config)
    // console.log(response.data)
    return response.data
}


const popUpService = {
    PopUpDetails
}
export default popUpService