import axios from "axios"
// import { json } from "react-router-dom"

const API_URL = process.env.API_URL
let config = {
  // headers: {
  //   "consumer-secret": process.env.VITE_SECRET,
  //   "consumer-key": process.env.VITE_KEY,
  // },
}
const addVendor = async (data) => {

  const response = await axios.post(API_URL + '/custom/v1/add-vendor-data', data, config)
  console.log(response.data)
  return response.data
}

const fetchVendorDetails = async (data) => {

  const response = await axios.get(API_URL + '/custom/v1/page/vendor', config)
  console.log(response.data)
  return response.data
}
const vendorService = {
  addVendor,
  fetchVendorDetails
}
export default vendorService