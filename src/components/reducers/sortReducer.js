import { SORT_PRODUCT, SEARCH_PRODUCT, PAGINATION_PRODUCT } from "../saga/actionTypes"

const initialState = {
    sort: '',
    search: '',
}

export function sortReducer(state = initialState, action) {
    switch (action.type) {
        case SORT_PRODUCT:
            return {
                ...state,
                sort: action.payload,
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                search: action.payload,
            }
        case PAGINATION_PRODUCT:
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}
