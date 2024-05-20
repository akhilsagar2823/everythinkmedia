import {  configureStore } from "@reduxjs/toolkit"
import { teamApi } from "../features/projectSlice";
import generalSlice from "../Components/Redux/generalSlice";

export const store = configureStore({
    reducer: {
        [teamApi.reducerPath] : teamApi.reducer,
        "general": generalSlice,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(teamApi.middleware),
});