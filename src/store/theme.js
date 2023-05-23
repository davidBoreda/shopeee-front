import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
      console.log(state.isDark);
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
