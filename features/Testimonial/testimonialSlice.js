
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import testimonialService from "./testimonialService";


const initialState = {
    testimonial: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

const testimonialSlice = createSlice({
    name: "Testimonial",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthTestimonial.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fecthTestimonial.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.testimonial = action.payload;
            })
            .addCase(fecthTestimonial.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.testimonial = null;
            });
    },
});

export const fecthTestimonial = createAsyncThunk(
    "/testimonial",
    async (_, thunkAPI) => {
        try {
            return await testimonialService.fecthTestimonial()
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
export default testimonialSlice.reducer
export const { reset } = testimonialSlice.actions
