import { configureStore } from "@reduxjs/toolkit";
import customers from './slices/CustomerAPI'


export const store = configureStore({
    reducer :{
        customer : customers
    }
})