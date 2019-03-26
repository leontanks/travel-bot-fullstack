import { GET_TRAVELS } from '../actions/constants'

const travelReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_TRAVELS:
          return payload
        default:
          return state
    }
}

export default travelReducer;