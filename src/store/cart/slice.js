
export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  DETELE_ITEM: 'DELETE_ITEM',
  ADD_MORE_ITEM: 'ADD_MORE_ITEM',
  ADD_LESS_ITEM: 'ADD_LESS_ITEM',
  ANIMATE_CART: 'ANIMATE_CART',
  HIDE_ANITAME_CART: 'HIDE_ANITAME_CART',
};

const initialState = {
  cart: [],
  count: 0,
  animateCart: false
};

const cartRecuder = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_ITEM: {

      // item index
      const itemIndex = state.cart.findIndex(
        (item) => item?.inCartId === payload?.inCartId
      );
    
     
      if (itemIndex === -1 || payload.inCartId === undefined) {
        
        // if item doesn't exist add it to store

        return {
          ...state,
          cart: [...state.cart, { ...payload, count: 1 }],
          count: state.count + 1,
        };
      } else {

        // if it does exist increase quantity

        state.cart[itemIndex].count++;
        return {
          ...state,
          cart: [...state.cart],
          count: ++state.count
        };
      }
    }

    case actions.ADD_MORE_ITEM: {
      state.cart[
        state.cart.findIndex((item) => item.inCartId === action.payload.inCartId)
      ].count++;

      return {
        ...state,
        cart: [...state.cart],
        count: ++state.count 
      };
    }
    case actions.ADD_LESS_ITEM: {
      state.cart[
        state.cart.findIndex((item) => item.inCartId === action.payload.inCartId)
      ].count--;

      return {
        ...state,
        cart: [...state.cart],
        count: --state.count
      };
    }

    case actions.DETELE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((el) => el.inCartId !== payload.inCartId),
        count: state.count > 0 ? state.count - 1 : 0,
      };
    }
    case actions.ANIMATE_CART: {
      return {
        ...state,
        animateCart: true
      }
    }
    case actions.HIDE_ANITAME_CART: {
      return {
        ...state,
        animateCart: false
      }
    }
    default:
      return state;
  }
};

export default cartRecuder;