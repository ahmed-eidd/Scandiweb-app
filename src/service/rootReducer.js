import { combineReducers} from 'redux'
import reposReducer from '../store/modals/slice'

const rootReducer = combineReducers({
  modals: reposReducer
})

export default rootReducer
