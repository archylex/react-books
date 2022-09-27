import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const bookSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { setItems } = bookSlice.actions;

export default bookSlice.reducer;
