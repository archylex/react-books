import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      let isRepeat = false;
      state.items.forEach((item) => {
        if (item.id === action.payload.id) {
          item.count = Number(item.count) + 1;
          isRepeat = true;
        }
      });
      if (!isRepeat) {
        action.payload.count = 1;
        state.items.push(action.payload);
      }

      state.totalPrice = state.items.reduce(
        (sum, item) => sum + Number(item.count) * Number(item.price),
        0,
      );
    },
    removeProduct(state, action) {
      state.items = state.items.filter((o) => o.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + Number(item.count) * Number(item.price),
        0,
      );
    },
    createItems(state, action) {
      state.items = [];
    },
    increaseCount(state, action) {
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          item.count = Number(item.count) + 1;
        }
      });
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + Number(item.count) * Number(item.price),
        0,
      );
    },
    decreaseCount(state, action) {
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          if (Number(item.count) - 1 < 1) return;
          item.count = Number(item.count) - 1;
          console.log(item);
        }
      });
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + Number(item.count) * Number(item.price),
        0,
      );
    },
  },
});

export const { addProduct, removeProduct, createItems, increaseCount, decreaseCount } =
  cartSlice.actions;

export default cartSlice.reducer;
