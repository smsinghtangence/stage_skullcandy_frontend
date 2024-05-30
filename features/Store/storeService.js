import axios from "axios";
const API_URL = process.env.API_URL;

const fecthStore = async () => {
 
  const response = await axios.get(API_URL + `/custom/v1/get/stors`)
  return response.data;
};

const fetchOnlineStore = async()=>{
    const response = await axios.get(API_URL + `/custom/v1/get/online-stores`)
    return response.data
}
const storeService = {
    fecthStore,
    fetchOnlineStore
};

export default storeService
