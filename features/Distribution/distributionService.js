import axios from "axios"

const API_URL = process.env.API_URL
let config = {
     // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    // },
}
const fetchPartnerDetails = async () => {

    const response = await axios.get(API_URL + '/custom/v1/page/distribution-patner', config)
    // console.log(response.data)
    return response.data
}

const addPartner = async(data)=>{
    const response = await axios.post(API_URL + `/custom/v1/form/distribution` , data , config)
    // console.log(response.data)
    return response.data
}

const distributionService = {
    fetchPartnerDetails,
    addPartner
}

export default distributionService