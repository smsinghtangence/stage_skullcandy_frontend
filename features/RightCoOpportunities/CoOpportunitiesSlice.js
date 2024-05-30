
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import oppotunityService from "./CoOpportunitiesService";
const initialState = {
    opportunity: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const CoOpportunitySlice = createSlice({
    name: 'coOpportunity',
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
            .addCase(fetchOppotunityDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.opportunity = action.payload
            })
            .addCase(fetchOppotunityDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.opportunity = null
            })
            .addCase(fetchOppotunityDetails.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const fetchOppotunityDetails = createAsyncThunk('/Co-opportunity', async (_, thunkAPI) => {

    try {
        // console.log('from service')
        return await oppotunityService.fetchOppotunityDetails()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export default CoOpportunitySlice.reducer
export const { reset } = CoOpportunitySlice.actions