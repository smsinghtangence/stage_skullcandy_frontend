
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import checkoutService from "./checkOutService";


const initialState = {
  coupon: "",
  showCoupon : [],
  states: [],
  shipping: "",
  shipping_lines : [ ],
  payment: {
    payment_method: 'razor pay',
    payment_method_title: "razor pay",
    set_paid: "false"
  },
  couponLines: [],
  checkoutUserType : 'guest',
  billing: {},
  order: [],
  isOrder: false,
  payWithCard: {},
  isRazorPayPopUp : false,
  isPaymentWithCard:false,
  updatedAddress: {},
  isUpdatedAddress : false,
  razorpay: true,
  address: "",
  isSaveAddress : false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

const checkOutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false,
        state.isLoading = false,
        state.isSuccess = false,
        state.message = '',
        state.isUpdatedAddress=false,
        state.isSaveAddress=false
    },
    payWithCardReset: (state) => {
      state.payWithCard = null
       state.isRazorPayPopUp=false
       state.isPaymentWithCard=false
      //state.razorpay = false
      // state.payment =""
      state.message=''
    },
    orderReset: (state) => {
      state.order = null,
        initialState
    },
    setPyamentRazorpayStatus : (state)=>{
     state.isPaymentWithCard = true
    },
    setRazorPayPopUp : (state)=>{
        state.isRazorPayPopUp = true
    },
    setCheckOutUserType :(state,action)=>{
      state.checkoutUserType = action.payload
    },
    resetAllState: (state) => {
      state.coupon = "",
        state.states = [],
        state.shipping = "",
        state.payment= {
          payment_method: 'razor pay',
          payment_method_title: "razor pay",
          set_paid: "false"
        },
        state.couponLines = [],
        state.billing = {},
        state.isOrder = false,
        state.payWithCard = {},
        state.updatedAddress = {},
        state.razorpay = true,
        state.address = "",
        state.isSaveAddress=false,
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = false,
        state.message = '',
        state.order = [],
        state.isRazorPayPopUp = false,
        state.isPaymentWithCard = false
    },
    addShippingDetails: (state, action) => {
      state.shipping = action.payload
    },
    addPaymentDetails: (state, action) => {
      state.payment = action.payload
      if (action.payload.payment_method === 'razor pay') {
        state.razorpay = true

      }
      else{
        state.razorpay = false
        state.isSuccess=false
      }
    },
    addCouponLines: (state, action) => {
      state.couponLines = action.payload
    },
    addBilling: (state, action) => {
      state.billing = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyCoupon.pending, (state) => {
        state.isLoading = 'couponVerifypending'
      })
      .addCase(verifyCoupon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = 'verified'
        state.message = ''
        state.coupon = action.payload
      })
      .addCase(verifyCoupon.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.coupon = ""
      })
      .addCase(fetchCoupon.pending, (state) => {
        state.isLoading = 'couponLoading'
      })
      .addCase(fetchCoupon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.showCoupon = action.payload
      })

      .addCase(fetchState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.states = action.payload
      })
      .addCase(createOrder.pending, (state, action) => {
        state.isLoading = 'orderPending'
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.order = action.payload
        state.isOrder = true
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.order = ""
        state.isOrder = false
      })
      .addCase(getAddress.pending, (state) => {
        state.isLoading = 'addressPending'
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.message = ""
        state.address = action.payload.Address
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.address = ""
      })
      .addCase(saveAddress.pending, (state) => {
        state.isLoading = true
      })
      .addCase(saveAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.isSaveAddress = true
        state.message = ""
      })
      .addCase(saveAddress.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateAddressDetails.fulfilled, (state, action) => {
       state.isUpdatedAddress= true
      })
      .addCase(updateAddressDetails.rejected, (state, action) => {
        state.isUpdatedAddress = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.isSaveAddress = false
        state.address = state.address.filter(i=>i.id!==action.payload.id)
        state.shipping = ""
        state.message = ""
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.updatedAddress = action.payload
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.updatedAddress = null
        state.message = action.payload
      })
      .addCase(PaymentWithCard.pending, (state, action) => {

        state.isLoading = 'payWithCardPending'

      })
      .addCase(PaymentWithCard.fulfilled, (state, action) => {
        state.isLoading = false,
          state.isSuccess = true
        state.isError = false
        state.payWithCard = action.payload
        state.message = ""
      })
      .addCase(PaymentWithCard.rejected, (state, action) => {
        state.message = action.payload
        state.isError = true
        state.isSuccess = false
        state.isLoading = false
        state.payWithCard = null
      })
      .addCase(updateOrderAfterPayment.pending, (state) => {
        state.isLoading = 'updateOrderAfterPaymentPending'
      })
      .addCase(updateOrderAfterPayment.fulfilled, (state, action) => {
        state.isLoading = false,
          state.isSuccess = 'upadteOrderSuccess'
        state.isError = false
        state.message = "success"
        state.order = action.payload
        state.razorpay = state.payment.payment_method==="razor pay"?true:false
      })
      .addCase(updateOrderAfterPayment.rejected, (state, action) => {
        state.message = action.payload
        state.isError = true
        state.isSuccess = false
        state.isLoading = false
      })
  }
})

export const verifyCoupon = createAsyncThunk('/checkout/coupon', async (code, thunkAPI) => {

  try {
    return await checkoutService.verifyCoupon(code)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const fetchCoupon = createAsyncThunk('/checkout/fetchCoupon', async (_, thunkAPI) => {
  try {
    return await checkoutService.fetchCoupon()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const fetchState = createAsyncThunk('/order/fetchState', async (_, thunkAPI) => {

  try {

    return await checkoutService.fetchState()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const createOrder = createAsyncThunk('checkout/order/place', async (lineItems, thunkAPI) => {
  try {
    const stateObj = thunkAPI.getState().checkOut
    const users = thunkAPI.getState().auth.users
    const shippingObjForGuest = stateObj.couponLines == "" ? {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      shipping: stateObj.shipping,
      shipping_lines : [
        stateObj.payment.payment_method === 'cod' ?  
        {
            "method_id": "flat_rate",
            "instance_id":"3",
            "method_title": "",
            "total": "20.00"
        }
        : {
          "method_id": "free_shipping",
          "instance_id":"4",
          "method_title": ""
      },
      ],
      line_items: lineItems,

    }
      : {
        payment_method: stateObj.payment.payment_method,
        payment_method_title: stateObj.payment.payment_method_title,
        set_paid: stateObj.payment.set_paid,
        status: 'Processing',
        billing: stateObj.shipping,
        shipping: stateObj.shipping,
        shipping_lines : [
          stateObj.payment.payment_method === 'cod' ?  
          {
              "method_id": "flat_rate",
              "instance_id":"3",
              "method_title": "",
              "total": "20.00"
          }
          : {
            "method_id": "free_shipping",
            "instance_id":"4",
            "method_title": ""
        },
        ],
        line_items: lineItems,
        coupon_lines: stateObj.couponLines
      }

    const shippingObjForLogin = stateObj.couponLines == "" ? {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      customer_id: users?.id,
      shipping: stateObj.shipping,
      shipping_lines : [
        stateObj.payment.payment_method === 'cod' ?  
        {
            "method_id": "flat_rate",
            "instance_id":"3",
            "method_title": "",
            "total": "20.00"
        }
        : {
          "method_id": "free_shipping",
          "instance_id":"4",
          "method_title": ""
      },
      ],
      line_items: lineItems,

    }
      : {
        // order_id:,
        payment_method: stateObj.payment.payment_method,
        payment_method_title: stateObj.payment.payment_method_title,
        set_paid: stateObj.payment.set_paid,
        status: 'Processing',
        billing: stateObj.shipping,
        customer_id: users?.id,
        shipping: stateObj.shipping,
        shipping_lines : [
          stateObj.payment.payment_method === 'cod' ?  
          {
              "method_id": "flat_rate",
              "instance_id":"3",
              "method_title": "",
              "total": "20.00"
          }
          : {
            "method_id": "free_shipping",
            "instance_id":"4",
            "method_title": ""
        },
        ],
        line_items: lineItems,
        coupon_lines: stateObj.couponLines
      }


    const shippingObj = users?.id  ? shippingObjForLogin : shippingObjForGuest
    // console.log(shippingObj)
    return await checkoutService.createOrder(shippingObj,users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const getAddress = createAsyncThunk('/checkout/getaddress', async (_, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users

    return await checkoutService.getAddress(users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const saveAddress = createAsyncThunk('/checkout/saveAddress', async (shipping, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    let address = thunkAPI.getState().checkOut.shipping
    return await checkoutService.saveAddress(address, shipping, users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const updateAddress = createAsyncThunk('/checkout/updtaeAddress', async (id, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users

    return await checkoutService.updateAddress(users, id)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteAddress = createAsyncThunk('/checkout/delteAddress', async (id, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    return await checkoutService.deleteAddress(id,users.id)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const updateAddressDetails = createAsyncThunk('/checkout/updateAddressDetails', async (addressId, thunkAPI) => {
  try {
    const shipping = thunkAPI.getState().checkOut.shipping
    return await checkoutService.updateAddressDetails(addressId,shipping)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const PaymentWithCard = createAsyncThunk('/checkout/paymentWithCard', async (data, thunkAPI) => {

  const order = thunkAPI.getState().checkOut.order
  try {
    return await checkoutService.PaymentWithCard(order)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateOrderAfterPayment = createAsyncThunk('/checkout/updateOrderAfterPayment', async (data, thunkAPI) => {
  const order = thunkAPI.getState().checkOut.order
 
  try {
    const stateObj = thunkAPI.getState().checkOut
    const users = thunkAPI.getState().auth.users
    const shippingObjForGuest = stateObj.couponLines == "" ? {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      shipping: stateObj.shipping,
      

    }
      : {
        payment_method: stateObj.payment.payment_method,
        payment_method_title: stateObj.payment.payment_method_title,
        set_paid: stateObj.payment.set_paid,
        status: 'Processing',
        billing: stateObj.shipping,
        shipping: stateObj.shipping,
         
        coupon_lines: stateObj.couponLines
      }

    const shippingObjForLogin = stateObj.couponLines == "" ? {
      payment_method: stateObj.payment.payment_method,
      payment_method_title: stateObj.payment.payment_method_title,
      set_paid: stateObj.payment.set_paid,
      status: 'Processing',
      billing: stateObj.shipping,
      customer_id: users?.id,
      shipping: stateObj.shipping,
     

    }
      : {
        payment_method: stateObj.payment.payment_method,
        payment_method_title: stateObj.payment.payment_method_title,
        set_paid: stateObj.payment.set_paid,
        status: 'Processing',
        billing: stateObj.shipping,
        customer_id: users?.id,
        shipping: stateObj.shipping,
     
        coupon_lines: stateObj.couponLines
      }


    const shippingObj = users?.id  ? shippingObjForLogin : shippingObjForGuest
    // console.log(shippingObj)
    // return await checkoutService.createOrder(shippingObj)
    return await checkoutService.updateOrderAfterPayment(order?.ref_order_id, {...shippingObj,...data})
   
  }

  catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})


export default checkOutSlice.reducer
export const { reset,setCheckOutUserType, addShippingDetails,setPyamentRazorpayStatus,setRazorPayPopUp, addPaymentDetails, addCouponLines, resetAllState, addBilling, payWithCardReset, orderReset } = checkOutSlice.actions