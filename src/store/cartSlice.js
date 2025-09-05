import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + Number(item.price * item.quantity),
        0
      );
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== itemId);
        }

        state.totalCount = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );

        state.totalPrice = state.items.reduce(
          (total, item) => total + Number(item.price * item.quantity),
          0
        );
      }
    },
    removeItemCompletely: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      state.totalCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + Number(item.price * item.quantity),
        0
      );
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, removeItemCompletely, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
