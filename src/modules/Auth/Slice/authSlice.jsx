import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { LOGIN_USER } from "../../../services/url";
import { toast } from "react-toastify";

const initialState = {
    user:[],
    loading:false,
    accessToken: null,
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (payload, thunkAPI) => {
      try {
        const response = await api.post(LOGIN_USER,payload)
        console.log("response",response)
        localStorage.setItem("accessToken", response.data.accessToken);
        toast.success(response.statusText);
        return response;
      } catch (err) {
        toast.error(err)
        return thunkAPI.rejectWithValue('Failed to fetch user');
      }
    }
  );

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{

    },
extraReducers:(builder)=>{
    builder.addCase(loginUser.pending,(state)=>{
        state.loading = true;
    })
    builder.addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.accessToken = action.payload.data.accessToken;
    })
    builder.addCase(loginUser.rejected,(state)=>{
        state.loading = false;
    })
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer;
