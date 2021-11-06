import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const addItem = createAction("wishlist/add");
export const removeItem = createAction("wishlist/remove");
export const toggleWishlistItem = createAction("wishlist/toggle");
export const removeAllItems = createAction("wishlist/removeAll");

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, { payload }) => {
      state.data.push(payload);
    })
    .addCase(removeItem, (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload.id);
    })
    .addCase(toggleWishlistItem, (state, { payload }) => {
      const isItemPresent = state.data.find((item) => item.id === payload.id);

      if (isItemPresent) {
        state.data = state.data.filter((item) => item.id !== payload.id);
      } else {
        state.data.push(payload);
      }
    })
    .addCase(removeAllItems, (state) => {
      state.data = [];
    });
});
