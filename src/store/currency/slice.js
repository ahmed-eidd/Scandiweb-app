import { createSlice } from '@reduxjs/toolkit';



export const actions = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
};

const initialState = {
  currency : 'USD' 
};

const cartRecuder = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.CHANGE_CURRENCY: {
      return {
        currency: payload
      };
    }
    default:
      return state;
  }
};

export default cartRecuder;


// export const currencySlice = createSlice({
//   name: 'currencySlice',
//   initialState: {
//     currency: 'USD'
//   },
//   reducers: {
//     changeCurrency: (state,action) => {
//       state.currency = action.payload
//     },

//   },
// });

// export const { changeCurrency } = currencySlice.actions

// export default currencySlice.reducer

