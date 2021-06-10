
export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DETELE_ITEM: 'DELETE_ITEM',
  ADD_MORE_ITEM: 'ADD_MORE_ITEM',
  ADD_LESS_ITEM: 'ADD_LESS_ITEM',
};

const initialState = {
  cart: [],
  count: 0,
};

const cartRecuder = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_ITEM: {

      // item index
      const itemIndex = state.cart.findIndex(
        (item) => item?.inCartId === payload?.inCartId
      );
      console.log(itemIndex)
      if (itemIndex === -1 || payload.inCartId === undefined) {
        return {
          ...state,
          cart: [...state.cart, { ...payload, count: 1 }],
          count: state.count + 1,
        };
      } else {
        state.cart[itemIndex].count++;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
    }

    case actions.ADD_MORE_ITEM: {
      state.cart[
        state.cart.findIndex((item) => item.name === action.payload.name)
      ].count++;

      return {
        ...state,
        cart: [...state.cart],
      };
    }
    case actions.ADD_LESS_ITEM: {
      state.cart[
        state.cart.findIndex((item) => item.name === action.payload.name)
      ].count--;

      return {
        ...state,
        cart: [...state.cart],
      };
    }

    case actions.DETELE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((el) => el.name !== payload.name),
        count: state.count < 0 ? state.count - 1 : 0,
      };
    }
    default:
      return state;
  }
};

export default cartRecuder;