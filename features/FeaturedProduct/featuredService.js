import axios from "axios"
// const API_URL = "http://43.204.72.166/pegasusapi/wp-json"
// console.log(process.env.API_URL)
const API_URL = process.env.API_URL

let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}

const fecthFeatureProducts = async()=>{

    const data = {
        "sort_by":"features",
        "per_page":"12",
        "page":"1"
        
        }
    const response = await axios.post(API_URL+'/custom/v1/product-sort/',data,config)
   return response.data
}


const featuredService = {
    fecthFeatureProducts
}

export default featuredService