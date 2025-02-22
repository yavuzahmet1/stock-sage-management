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
            console.log("Slice data", payload);
            state[payload.url] = payload.data?.data || payload.data; // data.data yoksa direkt data'yı kullan
            state.loading = false;
            state.error = false;
        },
        getProCatBrandSuccess: (state, { payload }) => {
            console.log("payload içindeyim")
            console.log("payload", payload);
            state.loading = false;
            state.products = payload[0] || []; // products için varsayılan boş dizi
            state.categories = payload[1] || []; // categories için varsayılan boş dizi
            state.brands = payload[2] || []; // brands için varsayılan boş dizi
        }
    },
});

export const { fetchStart, fetchFail, firmSuccess, stockSuccess, getProCatBrandSuccess } = stockSlice.actions;
export default stockSlice.reducer;