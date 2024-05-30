
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import aboutService from "./aboutService";

const initialState = {
    about: [],
    homeAbout : [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const aboutSlice = createSlice({
    name: 'about',
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
            .addCase(AboutDetails .fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.about = action.payload
            })
            .addCase(AboutDetails .rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.about = null
            })
            .addCase(AboutDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(HomeAboutSection.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.homeAbout = action.payload
            })
            .addCase(HomeAboutSection.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.homeAbout = null
            })
            .addCase(HomeAboutSection .pending, (state) => {
                state.isLoading = true
            })
    }
})



export const AboutDetails = createAsyncThunk('/about', async (_,thunkAPI) => {
    try {
        return await aboutService.AboutDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const HomeAboutSection = createAsyncThunk('/aboutHome', async (_,thunkAPI) => {
    try {
        return await aboutService.HomeAboutSection()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export default aboutSlice.reducer
export const { reset } = aboutSlice.actions