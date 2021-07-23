import { put } from 'redux-saga/effects'
import { BREAD_LINK } from '../saga/actionTypes'

export function* FetchSort({ payload }) {
     yield put({ type: BREAD_LINK, payload: payload })
}

