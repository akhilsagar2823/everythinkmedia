import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "links":{
        "ourTeam": false,
        "products": false,
        "project": false,
        "contactus": false,
    },
    "showHeader": false,
    
}
const gerneralSlice = createSlice({
    name : "general",
    initialState,
    reducers: {
        getLinkData : (state,action)=>{
            const { payload } = action;
            state.links = {
                ourTeam: payload === "/ourteam",
                products: payload === "/products",
                project: payload === "/project",
                contactus: payload === "/contactus",
            };
        },
        handleShowHeader : (state,action)=>{
            let location = action.payload;
            if(location !== '/'){
                state.showHeader = true;
            } else{
                state.showHeader = false;
                
            }
        }
    }
})
export const { getLinkData,handleShowHeader } = gerneralSlice.actions  ;
export default gerneralSlice.reducer;