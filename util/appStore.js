import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cartSlice";

const appStore=configureStore({
    reducer:{
        // Define your slices here
        cart:reducer,
    }
})
console.log(appStore.cart)
export default appStore;