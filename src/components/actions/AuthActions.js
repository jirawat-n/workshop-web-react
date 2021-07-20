import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { SET_AUTH_REQ, FETCH_START_REQ, FETCH_END_REQ, FETCH_ERROR_REQ, ADD_PRODUCT_AND_AUTH_REQ, FETCH_CART_REQ } from '../saga/actionTypes'

export const SET_AUTH = 'SET_AUTH'
export function* setAuth(payload) {
    yield put({
        type: SET_AUTH,
        payload: payload,
    })
}

const FetchUser = (payload => {
    try {
        const auth = axios.post(`http://127.0.0.1:8000/api/token/`, payload)
        return auth
    }
    catch (error) {
        console.log(error)
    }
})


export function* fetchAuthAsync({ payload }) {
    console.log(payload);
    try {
        yield put({ type: FETCH_START_REQ })
        const user = yield call(FetchUser, payload)
        yield put({ type: SET_AUTH_REQ, payload: user })
        yield put({ type: FETCH_ERROR_REQ, payload: null })
        yield put({ type: FETCH_END_REQ })

    }
    catch (error) {
        console.log(error);
        yield put({ type: SET_AUTH_REQ, payload: null })
        yield put({ type: FETCH_ERROR_REQ, payload: error.response?.data || error })
        yield put({ type: FETCH_END_REQ })

    }
}