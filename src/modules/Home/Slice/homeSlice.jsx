import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";
import { GET_POSTS } from "../../../services/url";
import { toast } from "react-toastify";

const initialState = {
   posts:[],
   loading:false,
   total:0,
   skip:0,
   limit:6,
}

export const fetchAllPosts = createAsyncThunk(
    'home/fetchAllPosts',
    async ({  limit,skip }, thunkAPI) => {
      try {
        const response = await api.get(GET_POSTS,{params:{limit:limit,skip:skip}})
        console.log("response",response)
        return response;
      } catch (err) {
        toast.error(err)
        return thunkAPI.rejectWithValue('Failed to fetch user');
      }
    }
  );

const homeSlice = createSlice({
    name:"home",
    initialState,
    reducers:{

    },
extraReducers:(builder)=>{
    builder.addCase(fetchAllPosts.pending,(state)=>{
        state.loading = true;
    })
    builder.addCase(fetchAllPosts.fulfilled,(state,action)=>{
        state.loading = false;
        state.posts = action.payload.data.posts;
        state.total = action.payload.data.total;
        state.skip = action.payload.data.skip;
        state.limit = action.payload.data.limit;

    })
    builder.addCase(fetchAllPosts.rejected,(state)=>{
        state.loading = false;
    })
    }
})

export const {} = homeSlice.actions;
export default homeSlice.reducer;
