import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
