import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./Components/Redux/generalSlice";

export const store = configureStore({
    reducer:{
        "general": generalSlice,
    }
})