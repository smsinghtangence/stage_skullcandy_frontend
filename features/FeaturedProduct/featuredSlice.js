 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import featuredService from "./featuredService";

const initialState = {
  feature: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const featuredSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthFeatureProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fecthFeatureProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.feature = action.payload;
      })
      .addCase(fecthFeatureProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.feature = null;
      });
  },
});

export const fecthFeatureProducts = createAsyncThunk(
  "/product/featureProducts",
  async (_, thunkAPI) => {
    try {
      return await featuredService.fecthFeatureProducts();
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
export default featuredSlice.reducer;
export const { reset } = featuredSlice.actions;
