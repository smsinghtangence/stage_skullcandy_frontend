
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countryService from "./countryService";

const initialState = {
    country: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const countrySlice = createSlice({
    name: 'country',
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
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.country = action.payload
            })
            .addCase(fetchCountry.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.country = null
            })
            .addCase(fetchCountry.pending, (state) => {
                state.isLoading = true
            })
           
    }
})



export const fetchCountry = createAsyncThunk('/country', async (_,thunkAPI) => {
    try {
        return await countryService.fetchCountry()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default countrySlice.reducer
export const { reset } = countrySlice.actions