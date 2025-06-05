import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0,
        totalItems:0,

    },
    reducers:{
        additem:(state,action)=>{
state.items.push(action.payload)
        },
        removeitem:(state,action)=>{
            state.items.pop();
    },
    clearcart:(state,action)=>{
state.items.length=0;
    },
}})

export default   cartSlice.reducer;
export const { additem, removeitem, clearcart } = cartSlice.actions;