import { put, call } from 'redux-saga/effects'
import { FETCH_CART_REQ } from '../saga/actionTypes'
import axios from 'axios'

const Submit = async ({ payload, token }) => {
    console.log('หน้า Submit', token);
    console.log('หน้า Submit', payload);
    const id = payload
    try {
        const data = {}
        const response = await axios.post(`http://127.0.0.1:8000/invoice/${id}/void/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
    catch (error) {
        console.log('เออเร่อของ fetchCart', error.response.data)
    }
}

export function* FetchInvoiceSubmit({ payload, token }) {
    console.log('หน้า Submit', token);
    console.log('หน้า Submit', payload);
    try {
        yield call(Submit, { payload, token })
        yield put({ type: FETCH_CART_REQ, payload: payload, token: token })
    }
    catch (error) {
        console.log(error);
    }

}
