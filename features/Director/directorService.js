import axios from "axios"
// import { json } from "react-router-dom"

const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const DirectorDetail = async () => {

    const response = await axios.get(API_URL + '/custom/v1/page/director', config)
    // console.log(response.data)
    return response.data
}

const directorService = {
    DirectorDetail

}
export default directorService