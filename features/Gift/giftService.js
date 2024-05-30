import axios from "axios"
const API_URL = process.env.API_URL



const fetchGiftPage = async () => {
  const response = await axios.get(API_URL + `/custom/v1/page/gift`)
  return response.data
}
const fetchGiftCategory = async (cat) => {
    const response = await axios.get(API_URL + `custom/v1/categories/${cat}`)
    return response.data
  }

const giftService = {
 fetchGiftPage,
 fetchGiftCategory
}
export default giftService