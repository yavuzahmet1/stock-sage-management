import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess: (state, { payload }) => {
      state.currentUser = payload.data.username
      state.token = payload.token
    }
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess
} = authSlice.actions;
export default authSlice.reducer;
