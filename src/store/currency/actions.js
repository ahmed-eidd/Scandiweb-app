import {actions} from './slice'



export const changeCurrency = (curr) => ({
  type: actions.CHANGE_CURRENCY,
  payload: curr
})