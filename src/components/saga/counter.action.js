import { put, delay } from 'redux-saga/effects'
import { INCREMENT, DECREMENT, ADD, ADD_TO_CART, DELETE_CART, SET_AUTH, ADD_PRODUCT_AND_AUTH, FETCH_CART } from '../saga/actionTypes'


export function* setIncrementAction() {
    yield put({ type: INCREMENT })
}

export function* setIncrementAsyncAction() {
    yield delay(1000)
    yield put({ type: INCREMENT })
}

export function* setDecrementAction() {
    yield put({ type: DECREMENT })
}

export function* setAddAction({ payload }) {
    yield put({ type: ADD, payload })
}
export function* setAuth({ payload }) {
    yield put({ type: SET_AUTH, payload })
}
export function* setAddProductAction({ payload }) {
    yield put({ type: ADD_TO_CART, payload })
}

export function* setDeleteProductAction({ payload }) {
    yield put({ type: DELETE_CART, payload })
}

export function* AddProductWithAuth({ payload, user }) {
    yield put({ type: ADD_PRODUCT_AND_AUTH, payload, user })
}

export function* SeeProductWithAuth({ user }) {
    yield put({ type: FETCH_CART, user })
}