import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_START_REQ, FETCH_END_REQ, FETCH_ERROR_REQ, FETCH_CART_REQ } from '../saga/actionTypes'

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
        // console.log('เปโหลด addtocartAction', payload);
        // console.log('โทค่อนหน้า addtocartAction', token);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = await axios.post('http://127.0.0.1:8000/cart/', { product: payload.id, quantity: payload.quantity }, config)
        // console.log('สะเตตัส', response.data);
        return response
    }
    catch (error) {
        // console.log('เออเร่อของ fetchCart', error.response.data)
    }
}


export function* fetchCartAsync({ payload, token }) {
    // console.log('หน้าเพิ่ม', token);
    try {
        yield put({ type: FETCH_START_REQ })
        let response = yield call(FetchCart, { payload, token })
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