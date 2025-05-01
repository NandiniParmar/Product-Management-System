import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../modules/Auth/Slice/authSlice";
import HomeSlice from "../modules/Home/Slice/homeSlice";

const store = configureStore({
    reducer:{
        Auth: AuthSlice,
        Home: HomeSlice,
    }
})

export default store;