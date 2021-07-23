import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_START_REQ, FETCH_END_REQ, FETCH_ERROR_REQ, FETCH_CART_REQ, ADD_TO_STORE_REQ, DELETE_PRODUCT_AND_AUTH_REQ } from '../saga/actionTypes'

export const ADD_PRODUCT_AND_AUTH = 'ADD_PRODUCT_AND_AUTH'
export function* setCartAdd(payload, token) {
    yield put({
        type: ADD_PRODUCT_AND_AUTH,
        payload: payload,
        token: token
    })
}

const FetchCart = async ({ payload, token }) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await axios.post('http://127.0.0.1:8000/cart/', { product: payload.id, quantity: payload.quantity }, config)
        return response
    }
    catch (error) {
        console.log('เออเร่อของ fetchCart', error.response.data)
    }
}


export function* fetchCartAsync({ payload, token }) {
    try {
        yield put({ type: FETCH_START_REQ })
        yield call(FetchCart, { payload, token })
        yield put({ type: FETCH_CART_REQ, token: token })
        yield put({ type: FETCH_ERROR_REQ, payload: null })
        yield put({ type: FETCH_END_REQ })
    }
    catch (error) {
        console.log('เออเร่อ', error);
        yield put({ type: FETCH_CART_REQ, token: null })
        yield put({ type: FETCH_ERROR_REQ, payload: error.response?.data || error })
        yield put({ type: FETCH_END_REQ })

    }
}


const DeleteCart = async ({ payload, token }) => {
    console.log(payload);
    console.log(token);
    const id = payload
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await axios.delete(`http://127.0.0.1:8000/cart/${id}/`, config)
        return response.data
    }
    catch (error) {
        console.log('เออเร่อของ fetchCart', error)
    }
}


export function* fetchDeleteCartAsync({ payload, token }) {
    try {
        let response = yield call(DeleteCart, { payload, token })
        yield put({ type: FETCH_CART_REQ, token: token })
    }
    catch (error) {
        console.log('เออเร่อ ไม่เข้า', error);
    }
}


const UpdateFetchCart = async ({ payload, token, quantity }) => {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await axios.patch(`http://127.0.0.1:8000/cart/${payload}/`, { quantity: quantity }, config)
        return response
    }
    catch (error) {
        console.log('เออเร่อของ fetchCart', error.response.data)
    }
}


export function* fetchUpdateCartAsync({ payload, token, quantity }) {
    try {
        yield call(UpdateFetchCart, { payload, token, quantity })
        yield put({ type: FETCH_CART_REQ, token: token })

    }
    catch (error) {
        console.log('เออเร่อ', error);
        yield put({ type: FETCH_CART_REQ, token: null })
        yield put({ type: FETCH_ERROR_REQ, payload: error.response?.data || error })
        yield put({ type: FETCH_END_REQ })

    }
}