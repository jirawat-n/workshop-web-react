import { put, call } from 'redux-saga/effects'
import { FETCH_CART_REQ } from '../saga/actionTypes'
import axios from 'axios'
const Checkout = async (token) => {
    console.log('token header', token);
    try {
        const data = {}
        const response = await axios.post('http://127.0.0.1:8000/checkout/', data, {
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

export function* FetchInvoice({ token }) {
    console.log('โทเค่นหน้า', token);
    try {
        yield call(Checkout, token)
        yield put({ type: FETCH_CART_REQ, token: token })
    }
    catch (error) {
        console.log(error);
    }

}
