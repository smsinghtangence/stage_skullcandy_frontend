
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsLetterService from "./newsLetterService";

const initialState = {
    newsLetter: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const newsLetterSlice = createSlice({
    name: 'newsLetter',
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
            .addCase(subscribeUs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.newsLetter = action.payload
            })
            .addCase(subscribeUs.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.newsLetter = null
            })
            .addCase(subscribeUs.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const  subscribeUs = createAsyncThunk('/subscribe', async (email,thunkAPI) => {
    try {
        return await newsLetterService.subscribeUs(email)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})



export default newsLetterSlice.reducer
export const { reset } = newsLetterSlice.actions