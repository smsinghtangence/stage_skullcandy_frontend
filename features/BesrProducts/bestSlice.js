
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bestService from "./bestService";

const initialState = {
    best : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message:''
}

const bestSlice = createSlice({
   name:'bestProducts',
   initialState,
   reducers:{
   reset : (state)=>initialState
   },
   extraReducers : (builder)=>{
   builder
   .addCase(fecthBestProducts.pending,(state)=>{
    state.isLoading = true
   })
   .addCase(fecthBestProducts.fulfilled,(state,action)=>{
    state.isError = false
    state.isLoading=false
    state.isSuccess = true
    state.message=''
    state.best=action.payload
    })
    .addCase(fecthBestProducts.rejected,(state,action)=>{
    state.isError = true
    state.isLoading=false
    state.isSuccess = false
    state.message=action.payload
    state.best=null
    })
   }
})

export const fecthBestProducts = createAsyncThunk('/product/bestProducts',async(_,thunkAPI)=>{
try {
    return await bestService.fecthBestProducts()
} catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
}
})
export default bestSlice.reducer
export const {reset} = bestSlice.actions