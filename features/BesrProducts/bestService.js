import axios from "axios";
const API_URL = process.env.API_URL;

let config = {
  // headers: {
  //   "consumer-secret": process.env.VITE_SECRET,
  //   "consumer-key": process.env.VITE_KEY,
  // },
};

const fecthBestProducts = async () => {
  const data = {
    sort_by: "best_sellers",
   per_page: "25",
    page: "1",
  };
  const response = await axios.post(
    API_URL + "/custom/v1/product-sort/",
    data,
    config
  );
  return response.data;
};

const bestService = {
  fecthBestProducts,
};

export default bestService;
