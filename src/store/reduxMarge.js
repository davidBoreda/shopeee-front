import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import searchReducer from "./search";
import themeReducer from "./theme";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    authStore: authReducer,
    searchStore: searchReducer,
    themeStore: themeReducer,
  },
});
export default store;
