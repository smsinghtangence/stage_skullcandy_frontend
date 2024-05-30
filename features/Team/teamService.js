import axios from "axios"
// import { json } from "react-router-dom"
const API_URL = process.env.API_URL;
const fetchTeamCategory = async () => {

  const response = await axios.get(API_URL + '/custom/v1/get/team-cat')

  return response.data
}

const fetchTeamDetails = async (category) => {
  console.log('cat', category)
  const response = await axios.get(API_URL + `/custom/v1/get/team?cat=${category}`)
  //console.log('from service',response.data)
  return response.data
}
const fetchTeamHeader = async () => {
  const response = await axios.get(API_URL + `/custom/v1/page/team`)
  return response.data
}
const teamService = {
  fetchTeamCategory,
  fetchTeamDetails,
  fetchTeamHeader

}
export default teamService