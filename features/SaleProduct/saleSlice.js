
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import saleService from "./saleService";

const initialState = {
    sales : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : ''
}
const salesSlice = createSlice({
   name : 'sales',
   initialState,
   reducers : {
   reset : (state)=>initialState
   },
   extraReducers : (builder)=>{
   builder
   .addCase( fetchSaleProduct.pending,(state)=>{
    state.isLoading = true
   })
   .addCase( fetchSaleProduct.fulfilled,(state,action)=>{
    state.isError = false
    state.isLoading=false
    state.isSuccess = true
    state.message=''
    state.sales=action.payload
    })
    .addCase(fetchSaleProduct.rejected,(state,action)=>{
    state.isError = true
    state.isLoading=false
    state.isSuccess = false
    state.message=action.payload
    state.sales=null
    })
 
   }
})
export const fetchSaleProduct = createAsyncThunk('sale-product',async(_,thunkAPI)=>{
   try {
    return await saleService.fetchSaleProduct()
   } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
   }
})
export default salesSlice.reducer
export const {reset} = salesSlice.actions