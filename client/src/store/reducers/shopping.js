import { GET_SHOPPINGS } from '../actions/constants'

const shoppingReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_SHOPPINGS:
          return payload
        default:
          return state
    }
}

export default shoppingReducer;