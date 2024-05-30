
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountService from "./accountService";


const initialState = {
    getOrders: [],
    pswd: "",
    kids : null,
    getKids : {},
    customer : {},
    avatar : {},
    isUpdated : false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
            state.pswd = ""
            state.kids=null
            state.isUpdated = false
        },
        setUpdate : (state)=>{
            state.isUpdated = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrderDetails.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.getOrders = action.payload
            })
            .addCase(fetchOrderDetails.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload;
                state.getOrders = null
            })
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.pswd = action.payload.message
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.pswd = action.payload
            })
            .addCase(addKidsBirthday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addKidsBirthday.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.kids = action.payload
            })
            .addCase(addKidsBirthday.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.kids = null
            })
            .addCase(deleteKidsBirthday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteKidsBirthday.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.getKids = state.getKids.filter(i=>i.id!==action.payload)
            })
            .addCase(deleteKidsBirthday.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload;
            })
            .addCase(updateKidsBirthday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateKidsBirthday.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = 'success'
            })
            .addCase(updateKidsBirthday.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(getKidsBirthday.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getKidsBirthday.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.getKids = action.payload
            })
            .addCase(getKidsBirthday.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.getKids = null
            })
            .addCase(getCustomerDetail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCustomerDetail.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.customer = action.payload
            })
            .addCase(getCustomerDetail.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.customer = null
            })
            .addCase(updateCustomerDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCustomerDetails.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.customer = action.payload
                state.isUpdated = true
            })
            .addCase(updateCustomerDetails.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload;
                state.customer = null
            })

            .addCase(changeAvatar.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changeAvatar.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(changeAvatar.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.avatar = {}
            })

            
            .addCase(getAvatar.pending, (state) => {
                state.isLoading = 'avatarLoading'
            })
            .addCase(getAvatar.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ""
                state.avatar = action.payload
            })
            .addCase(getAvatar.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.avatar = {}
            })
    },
});

export const fetchOrderDetails = createAsyncThunk(
    "/account/fetchAllOrder",
    async (_, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.fetchOrderDetails(user_id)
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
export const changePassword = createAsyncThunk(
    "/account/changePswd",
    async (data, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.changePassword(user_id, data)
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

export  const addKidsBirthday = createAsyncThunk(
    "/account/addKidsBirthday",
    async (data, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.addKidsBirthday(user_id, data)
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

export const  getKidsBirthday = createAsyncThunk(
    "/account/GetaddKidsBirthday",
    async (_, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.getKidsBirthday(user_id)
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

export const  deleteKidsBirthday  = createAsyncThunk(
    "/kids/delete",
    async (kidsId, thunkAPI) => {
        try {
            return await accountService.deleteKidsBirthday(kidsId)
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
export const updateKidsBirthday = createAsyncThunk(
    "/kids/update",
    async (kidsdata,thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        // console.log(kidsdata)
        try {
            return await accountService.updateKidsBirthday(user_id,kidsdata)
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
export const  getCustomerDetail = createAsyncThunk(
    "/account/GetDetail",
    async (_, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.getCustomerDetail(user_id)
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
export const updateCustomerDetails = createAsyncThunk(
    "/account/upadateCustomer",
    async (data, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.updateCustomerDetails(user_id , data)
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

export const changeAvatar = createAsyncThunk(
    "/account/changeAvatar",
    async (image, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.changeAvatar(user_id , image)
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

export const getAvatar = createAsyncThunk(
    "/account/getAvatar",
    async (image, thunkAPI) => {
        const user_id = thunkAPI.getState().auth.users.id
        try {
            return await accountService.getAvatar(user_id)
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

export default accountSlice.reducer
export const { reset , setUpdate} = accountSlice.actions
