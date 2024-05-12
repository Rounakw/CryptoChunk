import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    // initialState: window.matchMedia('(prefers-color-scheme: dark)').matches?"dark":"light",
    initialState:"light",
    reducers:{
        toogleTheme(state, actions){
            return state = actions.payload
        }
    }
}) 
export default themeSlice
export const {toogleTheme} = themeSlice.actions