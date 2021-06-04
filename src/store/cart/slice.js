import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { mergeByIde } from '../../utilities/mergeById';

export const cartAdapter = createEntityAdapter({
  selectId: (product) => product?.name,
});

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: cartAdapter.getInitialState({
    cart: [],
    count: 0,
  }),
  // initialState: {

  //   cart: [],
  //   count: 0,

  // },
  reducers: {
    // addToCart: (state, action) => {
    //   state.cart = mergeByIde(state.cart, [{ ...action.payload, count: 1 }]);
    //   state.count = state.cart.length;
    // },
    addToCart: (state,action) => {
      console.log('p',action.payload)
      cartAdapter.addOne([action.payload]);
      state.count = state.entities.length 
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload);
      state.count = state.cart.length;
    },
    // addMore: (state, action) => {
    //   console.log(state)
    //   // state.cart = [
    //   //   ...state.cart,
    //   //   state.cart[
    //   //     state.cart.find((item) => item.name === action.payload.name)
    //   //   ].count++,
    //   // ];
    // },
    addMore: cartAdapter.updateOne,
  },
});

export const { addToCart, removeFromCart, addMore } = cartSlice.actions;

export default cartSlice.reducer;
