import { GET_SHOPPINGS } from './constants';


export const getShoppings = () => dispatch => {
    return fetch('/api/shoppings')
     .then(res => res.json())
     .then(shoppings => dispatch({type: GET_SHOPPINGS, payload: shoppings}))
}