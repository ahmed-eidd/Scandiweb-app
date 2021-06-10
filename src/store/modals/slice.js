
export const actions = {
  OPEN_CURRENCY: 'OPEN_CURRENCY',
  OPEN_CART: 'OPEN_CART',
};

const initialState = {
  currOpen: false,
  cartOpen: false,
};

const modalsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.OPEN_CURRENCY: {
      return {
        currOpen: !state.currOpen,
        cartOpen: false,
      };
    }
    case actions.OPEN_CART: {
      return {
        currOpen: false,
        cartOpen: !state.cartOpen,
      };
    }
    default:
      return state;
  }
};

export default modalsReducer;

