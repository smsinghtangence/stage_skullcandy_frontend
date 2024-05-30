import axios from "axios"
const API_URL = process.env.API_URL

const fetchCarousel = async () => {
  const response = await axios.get(API_URL + `/custom/v1/home/top-slider`)
  return response.data
}

const fetchListInfo = async () => {
  const response = await axios.get(API_URL + `/custom/v1/home/feature`)
  return response.data
}

const fetchBrands = async () => {
  const response = await axios.get(API_URL + `/custom/v1/home/brands`)
  return response.data
}

const puzzleBlock = async () => {
  const response = await axios.get(API_URL + `/custom/v1/home/section-images`)
  return response.data
}

const fetchMiddleBanner = async () => {
  const response = await axios.get(API_URL + `/custom/v1/home/childern-section`)
  return response.data
}

const homeService = {
  fetchCarousel,
  fetchListInfo,
  fetchBrands,
  puzzleBlock,
  fetchMiddleBanner
}
export default homeService