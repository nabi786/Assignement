import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// thunk midlewears
export const getAllCustomer = createAsyncThunk(
    "getAllCustomer",
    async (query, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3000/api/customer?${query}`);
            const result = await response.json();
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

// create customer
export const createCutomer = createAsyncThunk(
    "createCutomer",
    async (dataObj, { rejectWithValue }) => {

        const formData = new FormData();
            Object.entries(dataObj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch(`http://localhost:3000/api/customer`, {
                method: "POST",
                body: formData
            });
            
            const result = await response.json();
            return result;
        } catch (err) {
            console.log("error is ", err)
            return rejectWithValue(err);
        }
    }
);

// delete Customer
export const deleteCustomer = createAsyncThunk(
    "deleteCustomer",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3000/api/customer?id=${id}`, {
                method: "DELETE"
            });
            
            const result = await response.json();
            return result;
        } catch (err) {
            // console.log("error is ", err)
            return rejectWithValue(err);
        }
    }
);

// update Customer Data  
export const updateCustomer = createAsyncThunk(
    "updateCustomer",
    async (dataObj, { rejectWithValue }) => {

        const formData = new FormData();
            Object.entries(dataObj).forEach(([key, value]) => {
            formData.append(key, value);
        });
        try {
            const response = await fetch(`http://localhost:3000/api/customer`, {
                method: "PATCH",
                body : formData
            });
            
            const result = await response.json();
            return result;
        } catch (err) {
            // console.log("error is ", err)
            return rejectWithValue(err);
        }
    }
);



// thunk slices
export const customers = createSlice({
    name: "customer",
    initialState: {
        customerData: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllCustomer.pending]: (state) => {
            state.loading = true;
        },
        [getAllCustomer.fulfilled]: (state, action) => {
            state.loading = false;
            state.customerData = action.payload.data;
        },
        [getAllCustomer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // create customer
        [createCutomer.pending]: (state) => {
            state.loading = true;
        },
        [createCutomer.fulfilled]: (state, action) => {

            state.loading = false;
            state.customerData.push(action.payload.data);
        },
        [createCutomer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        
        // delete Custoomer
        [deleteCustomer.pending]: (state) => {
            state.loading = true;
        },
        [deleteCustomer.fulfilled]: (state, action) => {
            state.loading = false;
            state.customerData = action.payload.data 
        },
        [deleteCustomer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // update Customer
        [updateCustomer.pending]: (state) => {
            state.loading = true;
        },
        [updateCustomer.fulfilled]: (state, action) => {

            state.loading = false;
            state.customerData = action.payload.data
        },
        [updateCustomer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default customers.reducer;