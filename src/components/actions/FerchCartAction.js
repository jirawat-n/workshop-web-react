import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_START_REQ, FETCH_END_REQ, FETCH_ERROR_REQ, ADD_TO_STORE_REQ } from '../saga/actionTypes'

export const ADD_TO_STORE = 'ADD_TO_STORE'
export function* seeStore({ payload }) {
    yield put({
        type: ADD_TO_STORE,
        payload: payload,
    })
}

const FetchCart = async (token) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await axios.get('http://127.0.0.1:8000/cart/', config)
        return response.data
    }
    catch (error) {
        console.log('เออเร่อของ fetchCart', error.response.data)
    }
}

export function* fetchCartStoreAsync({ token }) {
    try {
        yield put({ type: FETCH_START_REQ })
        let response = yield call(FetchCart, token)
        yield put({ type: ADD_TO_STORE_REQ, payload: response })
        yield put({ type: FETCH_ERROR_REQ, payload: null })
        yield put({ type: FETCH_END_REQ })
    }
    catch (error) {
       
        yield put({ type: FETCH_ERROR_REQ, error })
        yield put({ type: FETCH_END_REQ })

    }
}


