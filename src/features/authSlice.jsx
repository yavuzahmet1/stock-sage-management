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
    },
    logoutSuccess: state => {
      state.token = null,
        state.currentUser = null
    },
    loginSuccess: (state, { payload }) => {
      state.token = payload?.token;
      state.currentUser = payload?.data?.username
      state.loading = false
    }
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  logoutSuccess, loginSuccess
} = authSlice.actions;
export default authSlice.reducer;
