
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storeService from "./storeService";

const initialState = {
    store: [],
    onlineStore: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const bestSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthStore.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fecthStore.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ''
                state.store = action.payload
            })
            .addCase(fecthStore.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.store = null
            })
            .addCase(fetchOnlineStore.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOnlineStore.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ''
                state.onlineStore = action.payload
            })
            .addCase(fetchOnlineStore.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.onlineStore = null
            })
    }
})

export const fecthStore = createAsyncThunk('/fetch/store', async (_, thunkAPI) => {
    try {
        return await storeService.fecthStore()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchOnlineStore = createAsyncThunk('/fetch/onlineStore', async (_, thunkAPI) => {
    try {
        return await storeService.fetchOnlineStore()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})
export default bestSlice.reducer
export const { reset } = bestSlice.actions