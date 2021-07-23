import { put } from 'redux-saga/effects'
import { SORT_PRODUCT, SEARCH_PRODUCT,PAGINATION_PRODUCT } from '../saga/actionTypes'

export function* FetchSort({ sort }) {
    yield put({ type: SORT_PRODUCT, payload: sort })
}


export function* FetchSearch({ search }) {
    yield put({ type: SEARCH_PRODUCT, payload: search })
}

export function* FetchPagination({ search }) {
    yield put({ type: PAGINATION_PRODUCT, payload: search })
}