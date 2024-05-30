
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import navService from "./navService";

const initialState = {
    nav: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};
const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNavDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNavDetails.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.nav = action.payload;
            })
            .addCase(fetchNavDetails.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.nav = null;
            });
    },
});
export const fetchNavDetails = createAsyncThunk(
    "/nav",
    async (_, thunkAPI) => {
        try {
            return await navService.fetchNavDetails()
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
export default navSlice.reducer;
export const { reset } = navSlice.actions;
