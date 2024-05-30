import axios from "axios"

const API_URL = process.env.API_URL

let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}
const data = {
    "sort_by":"sales",
    "per_page":"12",
    "page":"1"
    
    }
const fetchSaleProduct = async()=>{
    const response = await axios.post(API_URL +`/custom/v1/product-sort/`,data, config )
    return response.data
}

const saleService = {
    fetchSaleProduct
}

export default saleService