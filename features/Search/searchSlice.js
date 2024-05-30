
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
  searchItems: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.searchItems = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.searchItems = [];
        state.message = action.payload;
      });
  },
});

export default searchSlice.reducer;
export const { searchReset } = searchSlice.actions;

export const searchProducts = createAsyncThunk(
  "PRODUCTS/SEARCH",
  async (term) => {
    try {
      return await searchService.search(term);
    } catch (error) {
      console.log(error);
    }
  }
);
