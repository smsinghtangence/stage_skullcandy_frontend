
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
 
// const user = localStorage.getItem('user') ? JSON.parse(localStorage?.getItem('user')).user:null;
const user = JSON.parse(localStorage?.getItem('user'));
const loginTime = JSON.parse(localStorage.getItem('loginTime'))
// const user = ""
// const loginTime = ""

const initialState = {
    users : user ? user : null,
    loginTimestamp: loginTime ? loginTime : null,
    isLoading : false,
    isSuccess :  false,
    isError :  false,
    message : ''
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
    reset : (state)=>{
      state.isError = false,
      state.isLoading = false,
      state.isSuccess= false,
      state.message = ''
    }
    },
    extraReducers : (builder)=>{
      builder
      .addCase(userRegister.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(userRegister.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=true
        state.message=''
        state.users=action.payload
        state.loginTimestamp = JSON.parse(localStorage.getItem('loginTime'))
        
      })
      .addCase(userRegister.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.users = null
      })
      .addCase(userLogin.pending,(state=>{
        state.isLoading = true
      }))
      .addCase(userLogin.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=action.payload.status != 200 ? true : false
        state.isSuccess=action.payload.status==200 ? true : false
        state.message=action.payload.status != 200 ? action.payload.message : null
        state.users= {...action.payload.user,"token":action.payload.jwt}
        state.loginTimestamp = JSON.parse(localStorage.getItem('loginTime'))
        // localStorage.setItem('loginTime',Date.now())
      })
      .addCase(userLogin.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.users = null
      })
       .addCase(loginWithGoogle.pending,(state=>{
        state.isLoading = true
      }))
      .addCase(loginWithGoogle.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=action.payload.success === false ? true : false
        state.isSuccess=action.payload.success==true ? true : false
        state.message=action.payload.success === false ? action.payload.message : null
        state.users=action.payload.success==true ? action.payload : null
        state.loginTimestamp = JSON.parse(localStorage.getItem('loginTime'))
        // localStorage.setItem('loginTime',Date.now())
      })
      .addCase(loginWithGoogle.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.users = null
      })
      .addCase(loginWithFacebook.pending,(state=>{
        state.isLoading = true
      }))
      .addCase(loginWithFacebook.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isError=action.payload.success === false ? true : false
        state.isSuccess=action.payload.success==true ? true : false
        state.message=action.payload.success === false ? action.payload.message : null
        state.users=action.payload.success==true ? action.payload : null
        state.loginTimestamp = JSON.parse(localStorage.getItem('loginTime'))
        // localStorage.setItem('loginTime',Date.now())
      })
      .addCase(loginWithFacebook.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.users = null
      })
      .addCase(userLogout.fulfilled,(state)=>{
        state.users=null
      })
      .addCase(forgotPassword.pending,(state,action)=>{
        state.isLoading = true
      })
      .addCase(forgotPassword.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.message = action.payload
        state.isError = false
      })
      .addCase(forgotPassword.rejected,(state,action)=>{
        state.isSuccess = false
        state.isError=true
        state.message = action.payload
        state.isLoading=false
      })
      .addCase(updatePassword.pending,(state,action)=>{
        state.isLoading = true
      })
      .addCase(updatePassword.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.message = action.payload.message
        state.isError = false
      })
      .addCase(updatePassword.rejected,(state,action)=>{
        state.isSuccess = false
        state.isError=true
        state.message = action.payload
        state.isLoading=false
      })
    }
})

export const userRegister = createAsyncThunk('/auth/register',async(userData , thunkAPI)=>{
  try {
     return await authService.userRegister(userData)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
})

export const userLogin  = createAsyncThunk('/auth/login',async(userData,thunkAPI)=>{
  try {
    return await authService.userLogin(userData)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
})

export const userLogout = createAsyncThunk('auth/logout',async(_,thunkAPI)=>{
try {
   return await authService.userLogout()
} catch (error) {
  const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
  return thunkAPI.rejectWithValue(message)
}
})
export const forgotPassword = createAsyncThunk('auth/forgotPassowrd',async(email)=>{
  try {
  return await authService.forgotPassword(email)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
  return thunkAPI.rejectWithValue(message)
  }
})

export const updatePassword = createAsyncThunk('/auth/updatePassword',async(data,thunkAPI)=>{
  try {
    return await authService.updatePassword(data)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
})
export const loginWithGoogle = createAsyncThunk('/auth/loginWithGoogle',async(token,thunkAPI)=>{
  try {
    return await authService.loginWithGoogle(token)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
})

export const loginWithFacebook = createAsyncThunk('/auth/loginWithFacebook',async(token,thunkAPI)=>{
  try {
    // alert('fom slice',token)
    return await authService.loginWithFacebook(token)
  } catch (error) {
    const message  = (error.response &&  error.response.data && error.response.data.message || error.message || error.toString() )
    return thunkAPI.rejectWithValue(message)
  }
})

 export default authSlice.reducer
export const {reset} = authSlice.actions