
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import giftService from "./giftService";

const initialState = {
    giftPage : [],
    giftCategory : [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const giftSlice = createSlice({
    name: 'gift',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isLoading = false,
                state.isSuccess = false,
                state.message = ''
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(fetchGiftPage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.giftPage= action.payload
            })
            .addCase(fetchGiftPage.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchGiftPage.rejected,(state,action)=>{
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
                state.giftPage = [] 
            })
          
            .addCase(fetchGiftCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.giftCategory= action.payload
            })
            .addCase(fetchGiftCategory.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchGiftCategory.rejected,(state,action)=>{
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
                state.giftCategory = [] 
            })
            
    }
})



export const fetchGiftPage = createAsyncThunk('/gift/page', async (_, thunkAPI) => {

    try {
        return await giftService.fetchGiftPage()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})
export const fetchGiftCategory = createAsyncThunk('/gift/category', async (cat, thunkAPI) => {

    try {
        return await giftService.fetchGiftCategory(cat)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default giftSlice.reducer
export const { reset } = giftSlice.actions