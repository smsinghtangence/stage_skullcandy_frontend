import axios from "axios"
// import { json } from "react-router-dom"

const API_URL = process.env.API_URL
let config = {
  // headers: {
  //   "consumer-secret": process.env.VITE_SECRET,
  //   "consumer-key": process.env.VITE_KEY,
  // },
}
const userFeedback = async (feedbackdata) => {

  const response = await axios.post(API_URL + '/custom/v1/add-feedback-data', feedbackdata, config)

  return response.data
}

const fetchFeedbackDetails = async () => {

  const response = await axios.get(API_URL + '/custom/v1/page/feedback', config)
  return response.data
}
const feedbackService = {
  userFeedback,
  fetchFeedbackDetails

}
export default feedbackService