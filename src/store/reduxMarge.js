import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import letterReducer from "./letter";
import authReducer from "./auth";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    letterStore: letterReducer,
    authStore: authReducer,
  },
});
export default store;
