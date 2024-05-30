
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import currencyService from "./currencyService";
const initialState = {
    currency: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const currencySlice = createSlice({
    name: 'currency',
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
            .addCase(fetchCurrency.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.currency = action.payload
            })
            .addCase(fetchCurrency.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.currency = null
            })
            .addCase(fetchCurrency.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const fetchCurrency  = createAsyncThunk('/currency', async (_,thunkAPI) => {
    try {
        return await currencyService.fetchCurrency()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default currencySlice.reducer
export const { reset } = currencySlice.actions