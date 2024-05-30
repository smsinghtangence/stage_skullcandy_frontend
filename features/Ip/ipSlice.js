
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ipcountryService from "./ipcountryService";

const initialState = {
    ipcountry: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const ipcountrySlice = createSlice({
    name: 'ipcountry',
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
            .addCase(fetchipcountry.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.ipcountry = action.payload
            })
            .addCase(fetchipcountry.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.ipcountry = null
            })
            .addCase(fetchipcountry.pending, (state) => {
                state.isLoading = true
            })
           
    }
})



export const fetchipcountry = createAsyncThunk('/ipcountry', async (_,thunkAPI) => {
    try {
        return await ipcountryService.fetchipcountry()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default ipcountrySlice.reducer
export const { reset } = ipcountrySlice.actions