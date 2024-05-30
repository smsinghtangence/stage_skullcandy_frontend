
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import popUpService from "./PopUpService";

const initialState = {
    popUp: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const popUpSlice = createSlice({
    name: 'franchise',
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
            .addCase(PopUpDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.popUp = action.payload
            })
            .addCase(PopUpDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.popUp = null
            })
            .addCase(PopUpDetails.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const PopUpDetails = createAsyncThunk('/franchise', async (_, thunkAPI) => {
    try {
        return await popUpService.PopUpDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default popUpSlice.reducer
export const { reset } = popUpSlice.actions