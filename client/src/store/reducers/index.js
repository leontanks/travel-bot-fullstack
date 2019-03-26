import {combineReducers} from 'redux';
import customerReducer from './customer';
import shoppingReducer from './shopping';
import travelReducer from './travel';

export default combineReducers({
  customers: customerReducer,
  shoppings: shoppingReducer,
  travels: travelReducer
})
