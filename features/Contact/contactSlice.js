
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import contactService from "./contactService";

const initialState = {
    contact : [],
    formSubmit : '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const contactSlice = createSlice({
    name: 'contact',
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
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = 'success'
                state.message = ''
                state.contact = action.payload
            })
            .addCase(fetchContact.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.contact = null
            })
            .addCase(fetchContact.pending, (state) => {
                state.isLoading = true
            })
            .addCase(submitContactForm.fulfilled, (state, action) => {
                state.isLoading = 'no'
                state.isError = false
                state.isSuccess = true
                state.message = ''
                state.formSubmit = action.payload
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.isLoading = 'no'
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.formSubmit = null
            })
            .addCase(submitContactForm.pending, (state) => {
                state.isLoading = 'yes'
            })
    }
})



export const  fetchContact = createAsyncThunk('/fetch/contact', async (_,thunkAPI) => {
    try {
        return await contactService.fetchContact()
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export const submitContactForm = createAsyncThunk('/contactUs', async (data,thunkAPI) => {
    try {
        return await contactService.submitContactForm(data)
    } catch (error) {
        const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})

export default contactSlice.reducer
export const { reset } = contactSlice.actions