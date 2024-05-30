import axios from "axios"

const API_URL = process.env.API_URL

let config ={
    // headers: {
    //     "consumer-secret": process.env.VITE_SECRET,
    //     "consumer-key": process.env.VITE_KEY,
    //   },
}
const fetchProductDetail = async(id)=>{

    const response = await axios.get(API_URL +`/custom-api/v1/product-details/${id}`, config)
    // console.log(response.data)
    return response.data
}

const productService = {
    fetchProductDetail
}

export default productService