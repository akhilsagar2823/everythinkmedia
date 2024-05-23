import {  configureStore } from "@reduxjs/toolkit"
import { projectApi } from "../features/projectSlice";
import { teamApi } from "../features/teamSlice";
import generalSlice from "../Components/Redux/generalSlice";
import { reviewApi } from "../features/reviewSlice";
import { contactApi } from "../features/contactSlice";

export const store = configureStore({
    reducer: {
        [teamApi.reducerPath] : teamApi.reducer,
        [projectApi.reducerPath] : projectApi.reducer,
        [reviewApi.reducerPath] : reviewApi.reducer,
        [contactApi.reducerPath] : contactApi.reducer,
        "general": generalSlice,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(teamApi.middleware)
        .concat(projectApi.middleware)
        .concat(reviewApi.middleware)
        .concat(contactApi.middleware)
});