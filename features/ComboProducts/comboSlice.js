
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import comboService from "./comboService";

const initialState = {
    combo : [],
    isLoading : false,
    isSuccess : false,
    isError : false,
    message : ''
}
const comboSlice = createSlice({
   name : 'combo',
   initialState,
   reducers : {
   reset : (state)=>initialState
   },
   extraReducers : (builder)=>{
   builder
   .addCase(fetchComboProduct.pending,(state)=>{
    state.isLoading = true
   })
   .addCase(fetchComboProduct.fulfilled,(state,action)=>{
    state.isError = false
    state.isLoading=false
    state.isSuccess = true
    state.message=''
    state.combo=action.payload
    })
    .addCase(fetchComboProduct.rejected,(state,action)=>{
    state.isError = true
    state.isLoading=false
    state.isSuccess = false
    state.message=action.payload
    state.combo=null
    })
 
   }
})
export const fetchComboProduct = createAsyncThunk('combo-product',async(_,thunkAPI)=>{
   try {
    return await comboService.fetchComboProduct()
   } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
   }
})
export default comboSlice.reducer
export const {reset} = comboSlice.actions