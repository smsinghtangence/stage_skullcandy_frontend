
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import influencerService from "./influencerService";
const initialState = {
    influence: [],
    isSubmitLoading : false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const influencerSlice = createSlice({
    name: 'influencer',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isLoading = false,
                state.isSuccess = false,
                state.message = ''
                state.isSubmitLoading = false
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(addInfluencer.fulfilled, (state, action) => {
                state.isSubmitLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(addInfluencer.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload

            })
            .addCase(addInfluencer.pending, (state) => {
                state.isSubmitLoading = true
            })
            .addCase(getInfluencerReward.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = 'success'
                state.message = ''
                state.influence = action.payload
            })
            .addCase(getInfluencerReward.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.influence=null
            })
            .addCase(getInfluencerReward.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const addInfluencer = createAsyncThunk('/influence', async (data, thunkAPI) => {

    try {
       return await influencerService.addInfluencer(data)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const getInfluencerReward = createAsyncThunk('/influenceRewards', async (_, thunkAPI) => {
    try {
        return await influencerService.getInfluencerRewards()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})
export default influencerSlice.reducer
export const { reset } = influencerSlice.actions