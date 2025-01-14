"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartnWishService from "./cartnWishService";
const cart = JSON.parse(localStorage?.getItem('cart'))
const initialState = {
  cart: cart ? cart : [],
  wishlist: [],
  buyNow: [],
  cartComapre :[],
  isBuyNow : false,
  isSuccess: false,
  isError: false,
  message: "",
  isLoading: false
};

const cartnWishSlice = createSlice({
  name: "cartWish",
  initialState,
  reducers: {
    reset: (state) => {
      state.cart = [],
      state.buyNow = [],
      state.cartComapre=[],
      state.wishlist=[],
       state.isBuyNow = false
      state.isSuccess = false,
      state.isError = false,
      state.message = "",
      state.isLoading = false
    },
    resetBuyNow : (state)=>{
      state.buyNow = []
    },
    addToCart: (state, action) => {
      const cartIndex = state?.cart?.findIndex((item) => {
        return item?.id == action.payload?.id
      })
      
      if (cartIndex <= -1) {
        const cartItem = { ...action.payload, quantity: 1 }
        state.cart.push(cartItem)
        if (state.cart?.length !== 0) { localStorage.setItem('cart', JSON.stringify(state?.cart)) }

      }
      state.isSuccess = 'success'
    },
    decrement: (state, action) => {
      const cartIndex = state?.cart?.findIndex((item) => {
        return item.id === action.payload.id
      })

      state.cart[cartIndex].quantity === 1 ? state.cart[cartIndex].quantity = 1 : state.cart[cartIndex].quantity -= 1
      localStorage.setItem('cart', JSON.stringify(state?.cart))
    },

    increment: (state, action) => {
      const cartIndex = state?.cart?.findIndex((item) => {
        return item.id === action.payload.id
      })
      state.cart[cartIndex].quantity += 1
      
      localStorage.setItem('cart', JSON.stringify(state?.cart))
    },
    removeFromCart: (state, action) => {
      const updtaedVal = state?.cart?.filter(item => item.id !== action.payload)

      localStorage.setItem('cart', JSON.stringify(updtaedVal))
      state.cart = updtaedVal
    },
    compareCartState : (state,action)=>{
      state.cartComapre = action.payload
    },
    resetCartAfterPaymentForGustUser : (state,action)=>{
      state.cart =  cart ? cart : []
    },
    // addWishlist: (state, action) => {
    //   const wishIndex = state.wishlist.findIndex((item) => {
    //     return item.id === action.payload.id
    //   })
    //   if (wishIndex <= -1) {
    //     localStorage.setItem('wishlist',JSON.stringify(action.payload))
    //     // if (state.cart?.length !== 0) { localStorage.setItem('cart', JSON.stringify(state?.cart)) }
    //   }
    // },
    adddToBuyNow: (state, action) => {
      state.buyNow = action.payload
      state.cartComapre = state.isSuccess == true ? state.cart : state.cartComapre
    },
    removeFromBuyNow : (state,action)=>{
     state.buyNow = state.buyNow.filter(item=>item.id!==action.payload)
    },
    setBuyNowStatus : (state,action)=>{
     state.isBuyNow = true
    },
    resetBuyNowStatus: (state)=>{
     state.isBuyNow = false
    }
    // removeWishlist: (state, action) => {
    //   state.wishlist = state.wishlist.filter(i=>i.id!==action.payload)
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartforLogin.pending, (state, action) => {
      state.isLoading = true
    })
      .addCase(addToCartforLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = 'success'
        state.message = ''
        state.cart = action.payload
      

      })
      .addCase(addToCartforLogin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.cart = []

      })
      .addCase(addToCartforGuestafterLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToCartforGuestafterLogin.fulfilled, (state, action) => {

        state.isLoading = false
        state.isError = false
        state.isSuccess = 'success'
        state.message = ''
        state.cart = action.payload
      })
      .addCase(addToCartforGuestafterLogin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.cart = []

      })
      .addCase(getCartData.pending, (state, action) => {
        state.isLoading = 'getCartLoading'
      })
      .addCase(getCartData.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = 'success'
        state.message = ''
        state.cart = action.payload.data
      })
      .addCase(getCartData.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.cart = []

      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = ''
        state.isError = false
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
      })
      .addCase(deleteAllItemsFromCart.rejected, (state, action) => {

        state.message = action.payload

      })
      .addCase(getWishlist.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.wishlist = action.payload
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.wishlist = []
      })
      .addCase(addToWishlist.pending, (state, action) => {
        state.isLoading = 'wishlistLoading'
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.wishlist = action.payload
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.wishlist = []
      })
      .addCase(deleteWishlist.pending, (state, action) => {
        state.isLoading = "wishlistLoading"
      })
      .addCase(deleteWishlist.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.message = ""
        state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id)
      })
      .addCase(deleteWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.wishlist = []
      })

  }
})

export const addToCartforLogin = createAsyncThunk('/cart/add', async (cartObj, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    if (user) {
      return await cartnWishService.addToCartforLogin(cartObj, user)
    }

  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const getCartData = createAsyncThunk('/cart/getAll', async (_, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return cartnWishService.getCartData(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteFromCart = createAsyncThunk('/cart/delete', async (id, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return await cartnWishService.deleteFromCart(id, user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteAllItemsFromCart = createAsyncThunk('cart/deleteAll', async (_, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return await cartnWishService.deleteAllItemsFromCart(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const addToWishlist = createAsyncThunk('/wishlist/add', async (id, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users

    return await cartnWishService.addToWishlist(user, id)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const getWishlist = createAsyncThunk('/wishlist/get', async (_, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return await cartnWishService.getWishlist(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteWishlist = createAsyncThunk('/wishlist/delete', async (id, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return await cartnWishService.deleteWishlist(user, id)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const addToCartforGuestafterLogin = createAsyncThunk('/cart/add/afterlogin', async (lineItems, thunkAPI) => {
  try {
    const user = thunkAPI.getState().auth.users
    return await cartnWishService.addToCartforGuestafterLogin(lineItems, user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const {resetBuyNow, reset,setBuyNowStatus,resetCartAfterPaymentForGustUser,resetBuyNowStatus, addToCart, removeFromCart, increment, decrement, adddToBuyNow ,removeFromBuyNow,compareCartState} = cartnWishSlice.actions
export default cartnWishSlice.reducer
