import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkoutService from "./checkOutService";

const initialState = {
  coupon: "",
  showCoupon: [],
  states: [],
  shipping: "",
  shipping_lines: [],
  payment: {
    payment_method: 'razor pay',
    payment_method_title: "razor pay",
    set_paid: "false"
  },
  couponLines: [],
  checkoutUserType: 'guest',
  billing: {},
  order: [],
  isOrder: false,
  payWithCard: {},
  isRazorPayPopUp: false,
  isPaymentWithCard: false,
  updatedAddress: {},
  isUpdatedAddress: false,
  razorpay: true,
  address: "",
  isSaveAddress: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
};

export const createGuestCheckout = createAsyncThunk('checkout/createCheckout', async (payload) => {
  try {
    return await checkoutService.createGuestCheckout(payload);
  } catch (error) {
    throw Error(error.response.data.message || error.message);
  }
});

export const verifyCoupon = createAsyncThunk('/checkout/coupon', async (code, thunkAPI) => {
  try {
    return await checkoutService.verifyCoupon(code);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchCoupon = createAsyncThunk('/checkout/fetchCoupon', async (_, thunkAPI) => {
  try {
    return await checkoutService.fetchCoupon();
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchState = createAsyncThunk('/order/fetchState', async (_, thunkAPI) => {
  try {
    return await checkoutService.fetchState();
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const createOrder = createAsyncThunk('checkout/order/place', async (lineItems, thunkAPI) => {
  try {
    const stateObj = thunkAPI.getState().checkout;
    const users = thunkAPI.getState().auth.users;
    const shippingObj = {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      shipping: stateObj.shipping,
      shipping_lines: [
        stateObj.payment.payment_method === 'cod'
          ? { method_id: "flat_rate", instance_id: "3", method_title: "", total: "20.00" }
          : { method_id: "free_shipping", instance_id: "4", method_title: "" },
      ],
      line_items: lineItems,
      ...(stateObj.couponLines && { coupon_lines: stateObj.couponLines }),
      ...(users?.id && { customer_id: users.id }),
    };

    return await checkoutService.createOrder(shippingObj, users);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAddress = createAsyncThunk('/checkout/getaddress', async (_, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users;
    return await checkoutService.getAddress(users);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const saveAddress = createAsyncThunk('/checkout/saveAddress', async (shipping, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users;
    const address = thunkAPI.getState().checkout.address;
    return await checkoutService.saveAddress(address, shipping, users);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateAddress = createAsyncThunk('/checkout/updateAddress', async (id, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users;
    return await checkoutService.updateAddress(users, id);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteAddress = createAsyncThunk('/checkout/deleteAddress', async (id, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users;
    return await checkoutService.deleteAddress(id, users.id);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateAddressDetails = createAsyncThunk('/checkout/updateAddressDetails', async (addressId, thunkAPI) => {
  try {
    const shipping = thunkAPI.getState().checkout.shipping;
    return await checkoutService.updateAddressDetails(addressId, shipping);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const PaymentWithCard = createAsyncThunk('/checkout/paymentWithCard', async (data, thunkAPI) => {
  const order = thunkAPI.getState().checkout.order;
  try {
    return await checkoutService.PaymentWithCard(order);
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateOrderAfterPayment = createAsyncThunk('/checkout/updateOrderAfterPayment', async (data, thunkAPI) => {
  const order = thunkAPI.getState().checkout.order;
  try {
    const stateObj = thunkAPI.getState().checkout;
    const users = thunkAPI.getState().auth.users;
    const shippingObj = {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      shipping: stateObj.shipping,
      ...(stateObj.couponLines && { coupon_lines: stateObj.couponLines }),
      ...(users?.id && { customer_id: users.id }),
    };

    return await checkoutService.updateOrderAfterPayment(order?.ref_order_id, { ...shippingObj, ...data });
  } catch (error) {
    const message = error.response?.data?.message || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const checkOutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
      state.isUpdatedAddress = false;
      state.isSaveAddress = false;
    },
    payWithCardReset: (state) => {
      state.payWithCard = null;
      state.isRazorPayPopUp = false;
      state.isPaymentWithCard = false;
      state.message = '';
    },
    orderReset: (state) => {
      state.order = null;
      return initialState;
    },
    setPyamentRazorpayStatus: (state) => {
      state.isPaymentWithCard = true;
    },
    setRazorPayPopUp: (state) => {
      state.isRazorPayPopUp = true;
    },
    setCheckOutUserType: (state, action) => {
      state.checkoutUserType = action.payload;
    },
    resetAllState: (state) => {
      return initialState;
    },
    addShippingDetails: (state, action) => {
      state.shipping = action.payload;
    },
    addPaymentDetails: (state, action) => {
      state.payment = action.payload;
      state.razorpay = action.payload.payment_method === 'razor pay';
      if (action.payload.payment_method !== 'razor pay') {
        state.isSuccess = false;
      }
    },
    addCouponLines: (state, action) => {
      state.couponLines = action.payload;
    },
    addBilling: (state, action) => {
      state.billing = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyCoupon.pending, (state) => {
        state.isLoading = 'couponVerifypending';
      })
      .addCase(verifyCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = 'verified';
        state.message = '';
        state.coupon = action.payload;
      })
      .addCase(verifyCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.coupon = '';
      })
      .addCase(fetchCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = '';
        state.showCoupon = action.payload;
      })
      .addCase(fetchCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = '';
        state.states = action.payload;
      })
      .addCase(fetchState.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'createOrderfullfilled';
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'getAddressfullfilled';
        state.shipping = action.payload?.shipping;
        state.billing = action.payload?.billing;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(saveAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isSaveAddress = true;
        state.message = 'saveAddressfullfilled';
        state.address = action.payload;
      })
      .addCase(saveAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isUpdatedAddress = true;
        state.message = 'updateAddressfullfilled';
        state.updatedAddress = action.payload;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'deleteAddressfullfilled';
        state.updatedAddress = action.payload;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateAddressDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddressDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'updateAddressDetailsfullfilled';
        state.shipping = action.payload;
      })
      .addCase(updateAddressDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(PaymentWithCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PaymentWithCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'paymentWithCardfullfilled';
        state.payWithCard = action.payload;
      })
      .addCase(PaymentWithCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateOrderAfterPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOrderAfterPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'updateOrderAfterPaymentfullfilled';
        state.order = action.payload;
      })
      .addCase(updateOrderAfterPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createGuestCheckout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGuestCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = 'createGuestCheckoutfullfilled';
        state.order = action.payload;
      })
      .addCase(createGuestCheckout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const {
  reset,
  payWithCardReset,
  orderReset,
  setPyamentRazorpayStatus,
  setRazorPayPopUp,
  setCheckOutUserType,
  resetAllState,
  addShippingDetails,
  addPaymentDetails,
  addCouponLines,
  addBilling,
} = checkOutSlice.actions;

export default checkOutSlice.reducer;
