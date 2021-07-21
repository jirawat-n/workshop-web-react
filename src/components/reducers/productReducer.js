import { FETCH_PRODUCT } from '../saga/actionTypes'

const initialState = {
    product: '',
}

export function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                product: action.payload,
            }

        default:
            return state
    }
}