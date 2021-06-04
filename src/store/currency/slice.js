import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currencySlice',
  initialState: {
    currency: 'USD'
  },
  reducers: {
    changeCurrency: (state,action) => {
      state.currency = action.payload
    },

  },
});

export const { changeCurrency } = currencySlice.actions

export default currencySlice.reducer

