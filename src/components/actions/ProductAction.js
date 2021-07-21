import { put } from 'redux-saga/effects'

export const FETCH_PRODUCT = 'FETCH_PRODUCT'

export function* fetchProductView({ payload }) {
    console.log(payload);
    yield put({ type: FETCH_PRODUCT, payload: payload })

}


