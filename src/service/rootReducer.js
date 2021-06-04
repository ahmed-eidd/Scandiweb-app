import { combineReducers} from 'redux'
import modalsReducer from '../store/modals/slice'
import currencyReducer from '../store/currency/slice'


const rootReducer = combineReducers({
  modals: modalsReducer,
  currency: currencyReducer 
})

export default rootReducer
