import { actions } from './slice';

export const cartModalAction = () => ({
  type: actions.OPEN_CART,
});

export const currModalAction = () => ({
  type: actions.OPEN_CURRENCY,
});
