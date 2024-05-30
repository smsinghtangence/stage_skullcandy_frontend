
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import directorService from "./directorService";
const initialState = {
    director: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const directorSlice = createSlice({
    name: 'director',
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
            .addCase(DirectorDetail .fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.director = action.payload
            })
            .addCase(DirectorDetail .rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.director = null
            })
            .addCase(DirectorDetail .pending, (state) => {
                state.isLoading = true
            })
    }
})



export const DirectorDetail = createAsyncThunk('/director', async (_,thunkAPI) => {
    try {
        return await directorService.DirectorDetail()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default directorSlice.reducer
export const { reset } = directorSlice.actions