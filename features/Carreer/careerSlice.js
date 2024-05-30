
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import careerService from "./careerService";
const initialState = {
    career: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const careerSlice = createSlice({
    name: 'career',
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
            .addCase(fetchCareer.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.career = action.payload
            })
            .addCase(fetchCareer.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.career = null
            })
            .addCase(fetchCareer.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const fetchCareer = createAsyncThunk('/career', async (_,thunkAPI) => {
    try {
        return await careerService.fetchCareer()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default careerSlice.reducer
export const { reset } = careerSlice.actions