import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const addItem = createAction("cart/add");
export const removeItem = createAction("cart/remove");
export const toggleCartItem = createAction("cart/toggle");

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, { payload }) => {
      state.data.push(payload);
    })
    .addCase(removeItem, (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload.id);
    })
    .addCase(toggleCartItem, (state, { payload }) => {
      const isItemPresent = state.data.find((item) => item.id === payload.id);

      if (isItemPresent) {
        state.data = state.data.filter((item) => item.id !== payload.id);
      } else {
        state.data.push(payload);
      }
    });
});
