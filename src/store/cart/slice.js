import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { mergeByIde } from '../../utilities/mergeById';

export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DETELE_ITEM: 'DELETE_ITEM',
  ADD_MORE_ITEM: 'ADD_MORE_ITEM',
};

const initialState = {
  cart: [],
  count: 0,
};

const cartRecuder = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_ITEM: {
      return {
        ...state,
        cart: [...state.cart, {...payload, count: 1}],
        count: state.count + 1,
      };
    }
    case actions.ADD_MORE_ITEM: {
      state.cart[state.cart.findIndex(item => item.name === action.payload.name)].count++

      return {
        ...state,
        cart: [...state.cart]
      }
    }
    default:
      return state;
  }
};

export default cartRecuder;

// export const cartAdapter = createEntityAdapter({
//   selectId: (product) => product.name,
// });

// export const cartSelector = cartAdapter.getSelectors(state => state.cart);

// export const cartSlice = createSlice({
//   name: 'cartSlice',
//   initialState: cartAdapter.getInitialState({
//     cart: [],
//     count: 0,
//   }),
//   initialState: {

//     cart: [],
//     count: 0,

//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart = mergeByIde(state.cart, [{ ...action.payload, count: 1 }]);
//       state.count = state.cart.length;
//     },
//     addToCart: (state, action) => {
//       console.log('p', action.payload);
//       cartAdapter.addOne(state, {...action.payload, count: 1});
//       state.count = state.ids.length;
//     },
//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item.name !== action.payload);
//       state.count = state.cart.length;
//     },
//     addMore: (state, action) => {
//       console.log(state)
//       // state.cart = [
//       //   ...state.cart,
//       //   state.cart[
//       //     state.cart.find((item) => item.name === action.payload.name)
//       //   ].count++,
//       // ];
//     },
//     addMore: (state, action) => {
//       cartAdapter.updateOne(state,);
//     },
//   },
// });

// export const { addToCart, removeFromCart, addMore } = cartSlice.actions;

// export default cartSlice.reducer;
