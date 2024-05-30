
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopService from "./shopService";

const initialState = {
  shopPayload: [],
  mainPayload: {
    attributes: [],
  },
};

const shopPaylaodSlice = createSlice({
  name: "shopPayload",
  initialState,
  reducers: {
    updateMainPayload: (state, action) => {
      console.log("state  ", action.payload);
      return { ...state, mainPayload: action.payload };
    },
    updatePayload: (state, action) => {
      //   console.log(state);

      return { ...state, shopPayload: [...state.shopPayload, action.payload] };
    },
    deletePayload: (state, action) => {
      //   console.log(state);
      return {
        ...state,
        shopPayload: state.shopPayload.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    deleteAllShopPayload : (state)=>{
      state.shopPayload = []
    }
  },
});

export default shopPaylaodSlice.reducer;
export const { updatePayload, deletePayload, updateMainPayload , deleteAllShopPayload } =
  shopPaylaodSlice.actions;
