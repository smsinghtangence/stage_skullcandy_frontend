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
  isLoading: false,
  drawerOpen: false,
  htmlActive: false,
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
      const { 
        product_id, 
        quantity ,
        SKU ,
        name ,
        Variations_Color_Name ,
        Variations_Price ,
        Variant_Image_url ,
        Sales_price ,
        slug ,
        Variant_Image  } = action.payload
        const  Item = 
           {
              "product_id":product_id,
              "quantity":quantity,
              "SKU":SKU,
              "name":name,
              "Variations_Color_Name":Variations_Color_Name,
              "Variations_Price":Variations_Price,
              "Variant_Image_url":Variant_Image_url,
              "Sales_price":Sales_price,
              "slug":slug,
              "Variant_Image":Variant_Image,
              }
         
      const cartIndex = state?.cart?.findIndex((item) => {
        return item?.SKU == action.payload?.SKU
      })
      
      if (cartIndex <= -1) {

        const cartItem = { ...Item, quantity: 1 }
        state.cart.push(cartItem)
        if (state.Cart?.length != 0) { localStorage.setItem('cart', JSON.stringify(state?.cart)) }

      }
      state.isSuccess = 'success'
    },
    toggleDrawer: (state, action) => {
      state.drawerOpen = action.payload;
    },
    toggleHtml: (state, action) => {
      state.htmlActive = action.payload;
    },
    decrement: (state, action) => {
      const cartIndex = state?.cart?.findIndex((item) => {
        return item.SKU === action.payload.SKU
      })

      state.cart[cartIndex].quantity === 1 ? state.cart[cartIndex].quantity = 1 : state.cart[cartIndex].quantity -= 1
      localStorage.setItem('cart', JSON.stringify(state?.cart))
    },

    increment: (state, action) => {
      const cartIndex = state?.cart?.findIndex((item) => {
        return item.SKU === action.payload.SKU
      })
      state.cart[cartIndex].quantity += 1
      
      localStorage.setItem('cart', JSON.stringify(state?.cart))
    },
    removeFromCart: (state, action) => {
      const updtaedVal = state?.cart?.filter(item => item.SKU !== action.payload)

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
    //     return item.SKU === action.payload.id
    //   })
    //   if (wishIndex <= -1) {
    //     localStorage.setItem('wishlist',JSON.stringify(action.payload))
    //     // if (state.Cart?.length != 0) { localStorage.setItem('cart', JSON.stringify(state?.cart)) }
    //   }
    // },
    adddToBuyNow: (state, action) => {
      state.buyNow = action.payload
      state.cartComapre = state.isSuccess == true ? state.cart : state.cartComapre
    },
    removeFromBuyNow : (state,action)=>{
     state.buyNow = state.buyNow.filter(item=>item.SKU!==action.payload)
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
      .addCase(updateCartforLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCartforLogin.fulfilled, (state, action) => {

        state.isLoading = false
        state.isError = false
        state.isSuccess = 'success'
        state.message = ''
        state.cart = action.payload
      })
      .addCase(updateCartforLogin.rejected, (state, action) => {
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
        state.cart = action.payload
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
        state.cart = state.cart.filter(item => item.SKU !== action.payload.SKU)
      })
      .addCase(deleteAllItemsFromCart.rejected, (state, action) => {

        state.message = action.payload

      })
      .addCase(deleteAllItemsFromCart.fulfilled, (state, action) => {

        state.isLoading = false
        state.isSuccess = true
        state.message = ''
        state.isError = false
        state.cart = []

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
        state.wishlist = state.wishlist.filter(item => item.SKU !== action.payload.SKU)
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
    const users = thunkAPI.getState().auth.users
    const cart = thunkAPI.getState().cartWish.cart
    if (users) {
      return await cartnWishService.addToCartforLogin(cartObj,cart, users)
    }

  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

///////////
export const updateCartforLogin = createAsyncThunk('/cart/update', async (cartObj, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    const cart = thunkAPI.getState().cartWish.cart

    

    if (users) {
      return await cartnWishService.updateCartforLogin(cart, users)
    }

  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

 
///////////
export const getCartData = createAsyncThunk('/cart/getAll', async (_, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    return cartnWishService.getCartData(users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteFromCart = createAsyncThunk('/cart/delete', async (SKU, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    const cart = thunkAPI.getState().cartWish.cart
    return await cartnWishService.deleteFromCart(SKU,cart, users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteAllItemsFromCart = createAsyncThunk('cart/deleteAll', async (_, thunkAPI) => {
  try {
    const users = thunkAPI.getState().auth.users
    return await cartnWishService.deleteAllItemsFromCart(users)
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
    const users = thunkAPI.getState().auth.users
    const cart = thunkAPI.getState().cartWish.cart
    return await cartnWishService.addToCartforGuestafterLogin(lineItems,cart, users)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})
export const {resetBuyNow, reset,setBuyNowStatus,resetCartAfterPaymentForGustUser,resetBuyNowStatus, addToCart, removeFromCart, increment, decrement, adddToBuyNow ,removeFromBuyNow,compareCartState, toggleDrawer,toggleHtml} = cartnWishSlice.actions
export default cartnWishSlice.reducer
