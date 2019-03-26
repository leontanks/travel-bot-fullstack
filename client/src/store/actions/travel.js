import { GET_TRAVELS } from './constants';


export const getTravels = () => dispatch => {
    return fetch('/api/travels')
     .then(res => res.json())
     .then(travels => dispatch({type: GET_TRAVELS, payload: travels}))
}