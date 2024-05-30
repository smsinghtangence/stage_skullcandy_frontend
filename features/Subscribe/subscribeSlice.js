
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import subscribeService from "./subscribeService";

const initialState = {
    subscribe: '',
     isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const subscribeSlice = createSlice({
    name: 'subscribe',
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
            .addCase(Subscribe .fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.subscribe = action.payload
            })
            .addCase(Subscribe .rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.subscribe = null
            })
            .addCase(Subscribe.pending, (state) => {
                state.isLoading = true
            })
           
    }
})



export const Subscribe = createAsyncThunk('/subscribe', async (data,thunkAPI) => {
    try {
        return await subscribeService.Subscribe(data)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default subscribeSlice.reducer
export const { reset } = subscribeSlice.actions