import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../modules/Auth/Slice/authSlice";

const store = configureStore({
    reducer:{
        Auth: AuthSlice 
    }
})

export default store;