
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopService from "./shopService";

const initialState = {
  shop: [],
  authors: [],
  language: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthShop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fecthShop.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.shop = action.payload;
      })
      .addCase(fecthShop.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.shop = null;
      })
      .addCase(fecthAuthors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fecthAuthors.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.authors = [action.payload];
      })
      .addCase(fecthAuthors.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.authors = null;
      })
      .addCase(fecthLanguage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fecthLanguage.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.language = [action.payload];
      })
      .addCase(fecthLanguage.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.language = null;
      });
  },
});

export const fecthShop = createAsyncThunk(
  "/product/featureProducts",
  async (_, thunkAPI) => {
    try {
      return await shopService.fecthShop();
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
export const fecthAuthors = createAsyncThunk(
  "/product/fetchAuthors",
  async (_, thunkAPI) => {
    try {
      return await shopService.fecthAuthors();
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
export const fecthLanguage = createAsyncThunk(
  "/product/fecthLanguage",
  async (_, thunkAPI) => {
    try {
      return await shopService.fecthLanguage();
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
export default shopSlice.reducer;
export const { reset } = shopSlice.actions;
