
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import faqService from "./faqService";

const initialState = {
    faq : [],
    header : [],
    isLoading : false,
    isSuccess :  false,
    isError :  false,
    message : ''
}

const faqSlice = createSlice({
    name : 'faq',
    initialState,
    reducers : {
    reset : (state)=>{
      state.isError = false,
      state.isLoading = false,
      state.isSuccess= false,
      state.message = ''
    }
    },
    extraReducers : (builder)=>{
      builder
      
      .addCase(fetchFAQ.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(fetchFAQ.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.message = ""
        state.isError = false
        state.faq=action.payload
      })
      .addCase(fetchFAQ.rejected,(state,action)=>{
        state.isSuccess = false
        state.isError=true
        state.message = action.payload
        state.isLoading=false
      })
     
      .addCase(fetchFAQHeader.pending,(state)=>{
        state.isLoading = 'yes'
      })
      .addCase(fetchFAQHeader.fulfilled,(state,action)=>{
        state.isLoading='yes'
        state.isSuccess=true
        state.message = ""
        state.isError = false
        state.header=action.payload
      })
      .addCase(fetchFAQHeader.rejected,(state,action)=>{
        state.isSuccess = false
        state.isError=true
        state.message = action.payload
        state.isLoading=false
      })
    }
})


export const fetchFAQ = createAsyncThunk('/faq',async(_,thunkAPI)=>{
try {
   return await faqService.fetchFAQ()
} catch (error) {
  const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
  return thunkAPI.rejectWithValue(message)
}
})

export const fetchFAQHeader = createAsyncThunk('/faq/banner',async(_,thunkAPI)=>{
  try {
     return await faqService.fetchFAQHeader()
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
  })

export default faqSlice.reducer
export const {reset} = faqSlice.actions