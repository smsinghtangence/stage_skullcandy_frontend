
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopProductService from "./shopProductService";

const initialState = {
  shopProduct: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const shopProductSlice = createSlice({
  name: "shopProducts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthShopProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fecthShopProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.shopProduct = action.payload;
      })
      .addCase(fecthShopProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
        state.shopProduct = null;
      });
  },
});

export const fecthShopProduct = createAsyncThunk(
  "/product/shopProducts",
  async (payload, thunkAPI) => {
    try {
      return await shopProductService.fecthShopProducts(payload);
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
export default shopProductSlice.reducer;
export const { reset } = shopProductSlice.actions;
