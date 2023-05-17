import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter", //for redux use
  initialState, //initial state
  //functions to manipulate the state
  //the functions inside the reducers called actions
  reducers: {
    add1(state) {
      state.counter = state.counter + 1;
    },
    sub1(state) {
      state.counter = state.counter - 1;
    },
    addNumber(state, action) {
      state.counter += +action.payload;
    },
  },
});

/*
    export the actions (the functions that will manipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/manipulate the "state".
*/
export const counterActions = counterSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default counterSlice.reducer;
