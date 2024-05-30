
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import teamService from "./teamService";

const initialState = {
    team: [],
    teamCategory: [],
    teamHeader : [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const teamSlice = createSlice({
    name: 'team',
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


            .addCase(fetchTeamCategory.fulfilled, (state, action) => {
                state.isLoading = 'no'
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.teamCategory = action.payload
            })

            .addCase(fetchTeamCategory.rejected, (state, action) => {
                state.isLoading = 'no'
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.teamCategory = null
            })
            .addCase(fetchTeamCategory.pending, (state) => {
                state.isLoading = 'yes'
            })
            .addCase(fetchTeamDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.team = action.payload
            })

            .addCase(fetchTeamDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.team = null
            })
            .addCase(fetchTeamDetails.pending, (state) => {
                state.isLoading = 'load'
            })
            // 
            .addCase(fetchTeamHeader.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.teamHeader = action.payload
            })

            .addCase(fetchTeamHeader.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.teamHeader = null
            })
            .addCase(fetchTeamHeader.pending, (state) => {
                state.isLoading = true
            })
    }
})



export const fetchTeamCategory = createAsyncThunk('team/category', async (_, thunkAPI) => {

    try {

        return await teamService.fetchTeamCategory()

    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchTeamDetails = createAsyncThunk('team/detail', async (category, thunkAPI) => {

    try {
        console.log(category)
        return await teamService.fetchTeamDetails(category)

    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const fetchTeamHeader = createAsyncThunk('team/header', async (category, thunkAPI) => {

    try {
        return await teamService.fetchTeamHeader()

    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export default teamSlice.reducer
export const { reset } = teamSlice.actions