
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import vendorService from "./vendorService";
const initialState = {
    vendor: {},
    getVendorDetail :[],
    isLoading: false,
    isFormLoading : false,
    isSuccess: false,
    isError: false,
    message: ''
}

const vendorSlice = createSlice({
    name: 'vendor',
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
            .addCase(addVendor.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.vendor = action.payload
                state.isFormLoading = false
            })
            .addCase(addVendor.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.vendor = null
                state.isFormLoading = false
            })
            .addCase(addVendor.pending, (state) => {
                state.isFormLoading = true
            })
            .addCase(fetchVendorDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.getVendorDetail = action.payload
            })
            .addCase(fetchVendorDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.getVendorDetail = null
            })
            .addCase(fetchVendorDetails.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const addVendor = createAsyncThunk('/vendor', async (data, thunkAPI) => {
    try {
        return await vendorService.addVendor(data)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchVendorDetails = createAsyncThunk('/vendor/fetch', async (_, thunkAPI) => {
    try {
        return await vendorService.fetchVendorDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export default vendorSlice.reducer
export const { reset } = vendorSlice.actions