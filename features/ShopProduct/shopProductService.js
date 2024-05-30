import axios from "axios";
const API_URL = process.env.API_URL;

let config = {
  // headers: {
  //   "consumer-secret": process.env.VITE_SECRET,
  //   "consumer-key": process.env.VITE_KEY,
  // },
};

const fecthShopProducts = async (data) => {
  // const data = {
  //   sort_by: "features",
  //  per_page: "25",
  //   page: "1",
  // };
  console.log('from shop product',data,config)
  const response = await axios.post(
    API_URL + "/custom/v1/product-sort/",
    data,
    config
  );
  
  return response.data;
};

const shopProductService = {
  fecthShopProducts,
};

export default shopProductService;
