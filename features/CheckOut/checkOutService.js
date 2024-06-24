import axios from "axios";

const API_URL = process.env.API_URL;
const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.TOKEN || "";

const config = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const createGuestCheckout = async (payload) => {
  const res = await axios.post(`${BASE_URL}/checkouts`, payload);
  return res.data;
};

const verifyCoupon = async (code) => {
  const response = await axios.get(
    `${API_URL}/wc/v3/coupons?code=${code}`,
    config
  );
  return response.data;
};

const fetchCoupon = async () => {
  const response = await axios.get(`${API_URL}/custom/v1/coupon`, config);
  return response.data;
};

const fetchState = async () => {
  const response = await axios.get(`${API_URL}/wc/v3/data/countries/in`, config);
  return response.data;
};

const createOrder = async (shippingObj, users) => {
  const response = await axios.post(
    `${API_URL}/api/orders`,
    { data: shippingObj },
    {
      headers: {
        Authorization: `Bearer ${users?.token}`,
      },
    }
  );
  return { ...shippingObj, ref_order_id: response?.data?.data?.id };
};

const getAddress = async (users) => {
  const response = await axios.get(`${API_URL}/api/users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${users?.token}`,
    },
  });
  return response.data;
};

const saveAddress = async (address, shipping, users) => {
  const addressArray = {
    id: users.id,
    Company_Name: shipping?.Company_Name,
    GSTIN: shipping?.GSTIN,
    Address: [...address, shipping],
  };

  if (users?.id) {
    const response = await axios.put(
      `${API_URL}/api/users/${users.id}`,
      { ...addressArray },
      {
        headers: {
          Authorization: `Bearer ${users?.token}`,
        },
      }
    );
    if (response.status === 200) {
      return await getuserData(users);
    } else {
      return response.data;
    }
  } else {
    return { err: "Unauthorized" };
  }
};

const getuserData = async (users) => {
  const response = await axios.get(`${API_URL}/api/users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${users?.token}`,
    },
  });
  return response.data;
};

const updateAddress = async (users, id) => {
  return { err: "Unauthorized" };
};

const updateAddressDetails = async (addressId, shipping) => {
  const response = await axios.put(
    `${API_URL}/custom/v1/update/address-book/${addressId}`,
    shipping,
    config
  );
  return response.data;
};

const deleteAddress = async (addressId, userId) => {
  const response = await axios.delete(
    `${API_URL}/custom/v1/delete/address-book/${addressId}`,
    {
      headers: {
        "consumer-secret": process.env.VITE_SECRET,
        "consumer-key": process.env.VITE_KEY,
      },
      data: {
        user_id: userId,
      },
    }
  );
  return {
    id: addressId,
    data: response.data,
  };
};

const PaymentWithCard = async (data) => {
  const response = await axios.post(`${API_URL}/api/razorpay`, data, config);
  return response.data;
};

const updateOrderAfterPayment = async (id, data) => {
  const response = await axios.put(
    `${API_URL}/api/orders/${id}`,
    { data: data },
    config
  );
  return {
    ref_order_id: response.data.data.id,
    ...response.data.data.attributes,
  };
};

const checkoutService = {
  createGuestCheckout,
  verifyCoupon,
  fetchCoupon,
  fetchState,
  createOrder,
  getAddress,
  saveAddress,
  updateAddress,
  updateAddressDetails,
  deleteAddress,
  PaymentWithCard,
  updateOrderAfterPayment,
};

export default checkoutService;
