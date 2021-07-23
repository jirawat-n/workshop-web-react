import { STATUS_INVOICE } from "../saga/actionTypes"

const initialState = {
    sort: '',
    search: '',
}

export function sortReducer(state = initialState, action) {
    switch (action.type) {
        case STATUS_INVOICE:
            return {
                ...state,
                sort: action.payload,
            }
        default:
            return state
    }
}
