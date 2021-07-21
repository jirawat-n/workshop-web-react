export const FILTERS_CATEGORY = 'FILTERS_CATEGORY'
export const SEARCH_CATEGORY = 'SEARCH_CATEGORY'
export const SORT_CATEGORY = 'SORT_CATEGORY'

// Action creators
export function FilterCategory(FilterCategory) {
    return {
        type: FILTERS_CATEGORY,
        payload: FilterCategory,
    }
}

export function SortCategory(SortCategory) {
    return {
        type: SORT_CATEGORY,
        payload: SortCategory,
    }
}


export function SearchCategory(SearchCategory) {
    return {
        type: SEARCH_CATEGORY,
        payload: SearchCategory
    }
}