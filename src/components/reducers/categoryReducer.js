import { FILTERS_CATEGORY, SEARCH_CATEGORY, SORT_CATEGORY } from "../actions/CategoryAction";

const initialState = {
    search: null,
    category: null,
    sort_price: 'asc',
    sort_date: 'asc',
}

export function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FILTERS_CATEGORY:
            console.log("check search", state);
            return {
                ...state,
                category: action.payload,
                search: null
            }
        case SEARCH_CATEGORY:
            console.log("check search", state);
            return {
                ...state,
                sort_price: action.payload
            }
        case SORT_CATEGORY:
            console.log("check sort", state);
            return {
                ...state,
                category: null,
                search: action.payload
            }
    }
}