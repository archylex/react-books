import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Slices/filterSlice.js';
import cartSlice from './Slices/cartSlice.js';
import bookSlice from './Slices/bookSlice.js';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    bookSlice,
  },
});
