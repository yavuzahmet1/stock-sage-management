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
        categories: [],
        products: [],
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        stockSuccess: (state, { payload }) => {
            state[payload.url] = payload.data?.data || payload.data;
            state.loading = false;
            state.error = false;
        },
        getProCatBrandSuccess: (state, { payload }) => {
            state.loading = false;
            state.products = payload[0] || [];
            state.categories = payload[1] || [];
            state.brands = payload[2] || [];
        }
    },
});

export const { fetchStart, fetchFail, firmSuccess, stockSuccess, getProCatBrandSuccess } = stockSlice.actions;
export default stockSlice.reducer;