import { BREAD_LINK } from "../saga/actionTypes"

const initialState = {
    payload: '',
}

export function sortReducer(state = initialState, action) {
    switch (action.type) {
        case BREAD_LINK:
            return {
                ...state,
                payload: action.payload,
            }
        default:
            return state
    }
}
