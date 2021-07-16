import { put } from 'redux-saga/effects'

export const FETCH_START = 'FETCH_START'
export const FETCH_END = 'FETCH_END'
export const FETCH_ERROR = 'FETCH_ERROR'

export function* startFetch() {
    yield put({ type: FETCH_START })
}

export function* endFetch() {
    yield put({ type: FETCH_END })
}

export function* errorFetch(error) {
    yield put({ type: FETCH_ERROR, payload: error })
}