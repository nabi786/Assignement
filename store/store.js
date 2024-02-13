import { configureStore } from "@reduxjs/toolkit";
import customers from './slices/CustomerAPI'


export const store = configureStore({
    reducer :{
        app : customers
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})