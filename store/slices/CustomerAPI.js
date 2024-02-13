import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getAllCustomer = createAsyncThunk(
    "getAllCustomer", 
    async(data)=>{
    const response = await fetch(`http://localhost:3000/api/customer`)
    const result = await response.json()
    return result;
})

export const customers = createSlice({
    name : "customer",
    initialState : {
        customerData : [],
        loading : false,
        error : null,
        extraReducers : {
            [getAllCustomer.pending] :(state)=>{
                state.loading = true
            },
            [getAllCustomer.fulfilled] : (state,action)=>{
                state.loading = false,
                console.log("action payload ", action.payload)
                state.customerData=action.payload
            },
            [getAllCustomer.rejected] : (state,action)=>{
                console.log("error is ", action.payload)
                state.loading = false,
                state.error = action.payload
            }
        }
    },
})  


export default customers.reducer