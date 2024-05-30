
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import catalogueService from "./cataloqueService";

const initialState = {
    catalogue: [],
    banner : [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

const blogSlice = createSlice({
    name: "catalogue",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthCatalogue.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fecthCatalogue.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.catalogue = action.payload;
            })
            .addCase(fecthCatalogue.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.catalogue = null;
            })
            .addCase(fetchCatalogHeader.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCatalogHeader.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.banner = action.payload;
            })
            .addCase(fetchCatalogHeader.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.banner = null;
            })

    },
});

export const fecthCatalogue = createAsyncThunk(
    "/catalogue",
    async (_, thunkAPI) => {
        try {
            return await catalogueService.fecthCatalogue()
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

export const fetchCatalogHeader = createAsyncThunk(
    "/catalogue/header",
    async (_, thunkAPI) => {
        try {
            return await catalogueService.fetchCatalogHeader()
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
export default blogSlice.reducer
export const { reset, setActiveBlog } = blogSlice.actions
