import {combineReducers} from 'redux';
import customerReducer from './customer';
import shoppingReducer from './shopping'

export default combineReducers({
  customers: customerReducer,
  shoppings: shoppingReducer,
})
