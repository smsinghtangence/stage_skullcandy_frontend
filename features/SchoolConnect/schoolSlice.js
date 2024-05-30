
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import schoolService from "./schoolService";


const initialState = {
    school: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const schoolSlice = createSlice({
    name: 'school',
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
            .addCase(schoolDetails .fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.school = action.payload
            })
            .addCase(schoolDetails .rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.school = null
            })
            .addCase(schoolDetails.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const schoolDetails = createAsyncThunk('/school', async (_,thunkAPI) => {
    try {
        return await schoolService.schoolDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default schoolSlice.reducer
export const { reset } = schoolSlice.actions