
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import popularService from "./popularService";

const initialState = {
    popular : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : ''
}
const popularSlice = createSlice({
   name : 'popular',
   initialState,
   reducers : {
   reset : (state)=>initialState
   },
   extraReducers : (builder)=>{
   builder
   .addCase(fetchPopularProduct.pending,(state)=>{
    state.isLoading = true
   })
   .addCase(fetchPopularProduct.fulfilled,(state,action)=>{
    state.isError = false
    state.isLoading=false
    state.isSuccess = true
    state.message=''
    state.popular=action.payload
    })
    .addCase(fetchPopularProduct.rejected,(state,action)=>{
    state.isError = true
    state.isLoading=false
    state.isSuccess = false
    state.message=action.payload
    state.popular=null
    })
 
   }
})
export const fetchPopularProduct = createAsyncThunk('popular-product',async(_,thunkAPI)=>{
   try {
    return await popularService.fetchPopularProduct()
   } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
   }
})
export default popularSlice.reducer
export const {reset} = popularSlice.actions