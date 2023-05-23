import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navSearch: "",
  searchResoluteArray: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setSearchQuery(state, actions) {
      state.navSearch = actions.payload;
    },
    setSearchResoluteArray(state, actions) {
      state.searchResoluteArray = actions.payload;
    },
    clearSearch(state) {
      return initialState;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
