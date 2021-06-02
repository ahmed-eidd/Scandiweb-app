import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    currOpen: false,
    cartOpen: false,

  },
  reducers: {
    currOpenAction: (state) => {
      state.currOpen = !state.currOpen;
      state.cartOpen =  false
    },
    cartOpenAction: (state) => {
      state.currOpen = false;
      state.cartOpen =  !state.cartOpen;
    },

  },
});

export const { currOpenAction , cartOpenAction } = modalSlice.actions

export default modalSlice.reducer

