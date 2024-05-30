
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./BlogService";

const initialState = {
    blog: [],
    blogCategory : [],
    blogComment : [],
    activeBlog : "",
    blogsToShow: 9,      
    blogsPerLoad: 3,     
    visibleBlogs: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
};

const blogSlice = createSlice({
    name: "Blog",
    initialState,
    reducers: {
        reset: (state) =>{
           state.isLoading= false
           state.isSuccess= false
           state.isError= false
           state.message= ""
           state.blogComment =[]
        },
        setActiveBlog : (state,action)=>{
         //console.log('payload',action.payload)
         state.activeBlog=action.payload
        },
        setVisibleBlogs: (state, action) => {
            state.visibleBlogs = action.payload;
          },
      
          loadMoreBlogs: (state, action) => {
            state.visibleBlogs = [...state.visibleBlogs, ...action.payload];
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fecthBlog.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.blog = action.payload;
            })
            .addCase(fecthBlog.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.blog = null;
            })
            .addCase(fetchblogCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchblogCategory.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.blogCategory = action.payload;
            })
            .addCase(fetchblogCategory.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.blogCategory = null;
            })
            .addCase(fetchAllBlogByCategories.pending, (state) => {
                state.isLoading = 'yes';
            })
            .addCase(fetchAllBlogByCategories.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.blog = action.payload;
            })
            .addCase(fetchAllBlogByCategories.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.blog = null;
            })
            .addCase(addBlogComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addBlogComment.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.message = "";
                state.blogComment = action.payload;
            })
            .addCase(addBlogComment.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.payload;
                state.blogComment = null;
            })
    },
});

export const fecthBlog = createAsyncThunk(
    "/blog",
    async (_, thunkAPI) => {
        try {
            return await blogService.fecthBlog()
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

export const fetchblogCategory = createAsyncThunk(
    "/blog/category",
    async (_, thunkAPI) => {
        try {
            return await blogService.fetchblogCategory()
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
export const fetchAllBlogByCategories = createAsyncThunk(
    "/fetchAllBlogByCategories",
    async (slug, thunkAPI) => {
        const cat = thunkAPI.getState().blog.activeBlog
       
        try {
            return await blogService.fetchAllBlogByCategories(slug)
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

export const addBlogComment = createAsyncThunk(
    "/addBlogComment",
    async (data, thunkAPI) => {
        
        try {
            return await blogService.addBlogComment(data)
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
export const { reset ,setActiveBlog , setVisibleBlogs , loadMoreBlogs} = blogSlice.actions
