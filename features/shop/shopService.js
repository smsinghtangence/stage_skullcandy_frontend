import axios from "axios";
const API_URL = process.env.API_URL;

let config = {
  // headers: {
  //   "consumer-secret": process.env.VITE_SECRET,
  //   "consumer-key": process.env.VITE_KEY,
  // },
};

const fecthShop = async () => {
  try {
    const response = await axios.get(
      API_URL + "/custom/v1/categories",
      // data,
      config
    );
    // console.log('fetch-shop',response.data)
    return response.data;
  } catch (e) {
    // console.log("shop", e);
  }
};

const fecthAuthors = async () => {
  try {
    const response = await axios.get(
      API_URL + "/wc/v3/products/attributes/8/terms",
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const fecthLanguage = async () => {
  try {
    const response = await axios.get(
      API_URL + "/wc/v3/products/attributes/7/terms",
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const shopService = {
  fecthShop,
  fecthAuthors,
  fecthLanguage,
};

export default shopService;
