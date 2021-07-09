export const actions = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
};

const initialState = {
  currency: 'USD',
  symbol: '$',
};

const cartRecuder = (state = initialState, action) => {
  const { type, payload } = action;

  // switch for currencies symbols
  const symbols = (curr) => {
    switch (curr) {
      case 'USD':
        return '$';
      case 'GBP':
        return '£';
      case 'AUD':
        return '$';
      case 'JPY':
        return '¥';
      case 'RUB':
        return '₽';
      default:
        return null
    }


  };
  switch (type) {
    case actions.CHANGE_CURRENCY: {
      return {
        currency: payload,
        symbol: symbols(payload)
      };
    }
    default:
      return state;
  }
};

export default cartRecuder;
