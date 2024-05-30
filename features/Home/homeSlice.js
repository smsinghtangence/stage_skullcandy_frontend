
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeService from "./homeService";

const initialState = {
    carousel: [],
    listInfo: [],
    brands : [],
    puzzel :[],
    children : {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const homeSlice = createSlice({
    name: 'home',
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
            .addCase(fetchCarousel.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.carousel = action.payload
            })
            .addCase(fetchListInfo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.listInfo = action.payload
            })
            .addCase(fetchBrands.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.brands = action.payload
            })

            .addCase(puzzleBlock.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.puzzel = action.payload
            })

            .addCase(fetchMiddleBanner.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.children = action.payload
            })
            
    }
})



export const fetchCarousel = createAsyncThunk('/home/Carousel', async (_, thunkAPI) => {

    try {
        return await homeService.fetchCarousel()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchListInfo = createAsyncThunk('/home/listInfo', async (_, thunkAPI) => {

    try {
        return await homeService.fetchListInfo()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchBrands = createAsyncThunk('/home/brands', async (_, thunkAPI) => {
    try {
        return await homeService.fetchBrands()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const puzzleBlock = createAsyncThunk('/home/puzzle', async (_, thunkAPI) => {
    try {
        return await homeService.puzzleBlock()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchMiddleBanner  = createAsyncThunk('/home/middle-banner', async (_, thunkAPI) => {
    try {
        return await homeService.fetchMiddleBanner()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export default homeSlice.reducer
export const { reset } = homeSlice.actions