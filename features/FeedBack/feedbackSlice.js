
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import feedbackService from "./feedbackService";

const initialState = {
  feedback: "",
  fetchDetails : [],
  formLoading : false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

const feedbackSlice = createSlice({
  name: 'feedback',
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


      .addCase(userFeedback.fulfilled, (state, action) => {
        state.formLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = ''
        state.feedback = action.payload
      })

      .addCase(userFeedback.rejected, (state, action) => {
        state.formLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.feedback = null
      })
      .addCase(userFeedback.pending, (state) => {
        state.formLoading = true
      })
      .addCase(fetchFeedbackDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
      
        state.message = ''
        state.fetchDetails = action.payload
      })

      .addCase(fetchFeedbackDetails.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.fetchDetails = null
      })
      .addCase(fetchFeedbackDetails.pending, (state) => {
        state.isLoading = true
      })
  }
})



export const userFeedback = createAsyncThunk('/feedback', async (userFeedback, thunkAPI) => {

  try {

    return await feedbackService.userFeedback(userFeedback)

  } catch (error) {
    const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export const fetchFeedbackDetails = createAsyncThunk('/feedback/fetch', async (_, thunkAPI) => {

  try {

    return await feedbackService.fetchFeedbackDetails()

  } catch (error) {
    const message = (error.response && error.response.data & error.response.data.message || error.message || error.toString())
    return thunkAPI.rejectWithValue(message)
  }
})

export default feedbackSlice.reducer
export const { reset } = feedbackSlice.actions