
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newService from "./newService";

const initialState = {
  newArrival: [],

  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};
const newSlice = createSlice({
  name: "newArrival",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewArrival.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewArrival.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.newArrival = action.payload;
      })
      .addCase(fetchNewArrival.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.newArrival = null;
      });
  },
});
export const fetchNewArrival = createAsyncThunk(
  "newArrival",
  async (_, thunkAPI) => {
    try {
      return await newService.fetchNewArrival();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export default newSlice.reducer;
export const { reset } = newSlice.actions;
