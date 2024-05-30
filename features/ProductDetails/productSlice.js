
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    product : [],
    review :[],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : ''
}
const productSlice = createSlice({
   name : 'Product-Detail',
   initialState,
   reducers : {
   reset : (state)=>{
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
   },
   },
   extraReducers : (builder)=>{
   builder
   .addCase(fetchProductDetail.pending,(state)=>{
    state.isLoading = true
   })
   .addCase(fetchProductDetail.fulfilled,(state,action)=>{
    state.isError = false
    state.isLoading=false
    state.isSuccess = true
    state.message=''
    state.product=action.payload
    })
    .addCase(fetchProductDetail.rejected,(state,action)=>{
    state.isError = true
    state.isLoading=false
    state.isSuccess = false
    state.message=action.payload
    state.product=null
    })
    .addCase(createReview.fulfilled,(state,action)=>{
      state.isError = false
      state.isLoading=false
      state.isSuccess = 'success'
      state.message=''
      state.review = action.payload
   })
   }
})

export const fetchProductDetail = createAsyncThunk('product-details',async(id,thunkAPI)=>{
   try {
    return await productService.fetchProductDetail(id)
   } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
   }
})

export const createReview = createAsyncThunk('addReview',async(data,thunkAPI)=>{
   // console.log(data)
   try {
      const API_URL = process.env.API_URL
      let config ={
         // headers: {
         //    "consumer-secret": process.env.VITE_SECRET,
         //    "consumer-key": process.env.VITE_KEY,
         //  },
     }
     const response = await axios.post(API_URL +`/wc/v3/products/reviews`, data ,config)
     //console.log(response)
     return response
   } catch (error) {
      const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
      return thunkAPI.rejectWithValue(message)
   }
})
export default productSlice.reducer
export const {reset} = productSlice.actions