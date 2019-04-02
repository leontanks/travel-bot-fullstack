import {GET_CUSTOMERS} from './constants';
import axios from 'axios'

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}

// export const getCustomers = () => async dispatch => {
//   const res = await axios.get('/api/customers');
//   dispatch({type: GET_CUSTOMERS, payload: res.data});
// };