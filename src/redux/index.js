import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
