import axios from "axios"


const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const fetchCountry = async () => {

    const response = await axios.get(API_URL + '/wc/v3/data/countries', config)
    return response.data
}


const countryService = {
   fetchCountry
}
export default countryService