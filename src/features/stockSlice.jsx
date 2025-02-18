import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name: "stock",
    initialState: {
        loading: false,
        error: false,
        token: null,
        firms: [],
        brands: [],
        purchases: [],
        sales: [],
        categories: []
    },
    reducers: {
        fetchStart: state => {
            state.loading = true,
                state.error = false
        },
        fetchFail: state => {
            state.loading = false,
                state.error = true
        },
        stockSuccess: (state, { payload }) => {
            console.log("Slice data", payload)
            state[payload.url] = payload.data.data;
            state.loading = false;
            state.error = false
        },


    }
})

export const { fetchStart, fetchFail, firmSuccess, stockSuccess } = stockSlice.actions;
export default stockSlice.reducer;