import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  clientInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login(state, actions) {
      state.clientInfo = { ...state.clientInfo, ...actions.payload };
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.clear();
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
