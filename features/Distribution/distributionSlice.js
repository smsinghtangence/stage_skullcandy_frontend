
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import distributionService from "./distributionService";

const initialState = {
    partner: [],
    isLoading: false,
    formLoading :  false,
    isSuccess: false,
    isError: false,
    message: ''
}

const distributionSlice = createSlice({
    name: 'distribution',
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
            .addCase(fetchPartnerDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = 'success'
                state.message = ''
                state.partner = action.payload
            })
            .addCase(fetchPartnerDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.partner = null
            })
            .addCase(fetchPartnerDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPartner.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.formLoading = false
                state.message = action.payload
            })
            .addCase(addPartner.rejected, (state, action) => {
                state.formLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addPartner.pending, (state) => {
                state.formLoading = true
            })
    
    }
})



export const fetchPartnerDetails = createAsyncThunk('/partner', async (_, thunkAPI) => {
    try {
        return await distributionService.fetchPartnerDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const addPartner = createAsyncThunk('/partne/addr', async (data, thunkAPI) => {
    try {
        return await distributionService.addPartner(data)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default distributionSlice.reducer
export const { reset } = distributionSlice.actions