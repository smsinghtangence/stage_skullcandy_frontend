
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import footerService from "./footerService";

const initialState = {
    footer: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};
const footerSlice = createSlice({
    name: "footer",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFooterDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFooterDetails.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.footer = action.payload;
            })
            .addCase(fetchFooterDetails.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.footer = null;
            });
    },
});
export const  fetchFooterDetails = createAsyncThunk(
    "/fetch/footer",
    async (_, thunkAPI) => {
        try {
            return await footerService.fetchFooterDetails()
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
export default footerSlice.reducer;
export const { reset } = footerSlice.actions;
