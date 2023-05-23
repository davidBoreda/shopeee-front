import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import letterReducer from "./letter";
import authReducer from "./auth";
import searchReducer from "./search";
import themeReducer from "./theme";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    letterStore: letterReducer,
    authStore: authReducer,
    searchStore: searchReducer,
    themeStore: themeReducer,
  },
});
export default store;
