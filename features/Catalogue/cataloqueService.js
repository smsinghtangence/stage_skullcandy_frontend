import axios from "axios"
const API_URL = process.env.API_URL

const fecthCatalogue = async () => {

    const response = await axios.get(API_URL + `/custom/v1/get/catalogue`)
    return response.data
}

const fetchCatalogHeader = async()=>{
     const response = await axios.get(API_URL + `/custom/v1/page/catalogue`)
    return response.data
}

const catalogueService = {
    fecthCatalogue,
     fetchCatalogHeader
}

export default catalogueService