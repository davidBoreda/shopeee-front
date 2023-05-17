import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialState = {
  str: "",
};

const strSlice = createSlice({
  name: "str", //for redux use
  initialState, //initial state
  //functions to manipulate the state
  //the functions inside the reducers called actions
  reducers: {
    addA(state) {
      state.str = state.str + "a";
    },
    addB(state) {
      state.str = state.str + "asd ";
    },
    addStr(state, action) {
      state.str = state.str + action.payload;
    },
  },
});

/*
    export the actions (the functions that will manipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/manipulate the "state".
*/
export const strActions = strSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default strSlice.reducer;
