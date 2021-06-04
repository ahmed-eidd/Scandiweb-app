import { combineReducers} from 'redux'
import modalsReducer from '../store/modals/slice'
import currencyReducer from '../store/currency/slice'
import cartRecuder from '../store/cart/slice'

const rootReducer = combineReducers({
  modals: modalsReducer,
  currency: currencyReducer,
  cart: cartRecuder
})

export default rootReducer
