import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    currOpen: false,
    cartOpen: false,

  },
  reducers: {
    currOpen: (state) => {
      state.currOpen = !state.currOpen;
      state.cartOpen =  false
    },
    cartOpen: (state) => {
      state.currOpen = false;
      state.cartOpen =  !state.cartOpen;
    },

  },
});

export const { currOpen , cartOpen } = modalSlice.actions

export default modalSlice.reducer

