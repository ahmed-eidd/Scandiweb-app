import {actions} from './slice'



export const addItem = (item) => ({
  type: actions.ADD_ITEM,
  payload: item
})


export const addMoreItem = (item) => ({
  type: actions.ADD_MORE_ITEM,
  payload: item
})