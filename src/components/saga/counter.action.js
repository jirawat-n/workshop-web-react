import { put, delay } from 'redux-saga/effects'
import { INCREMENT, DECREMENT, ADD, ADD_TO_CART, DELETE_CART } from '../saga/actionTypes'


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


export function* setAddProductAction({ payload }) {
    yield put({ type: ADD_TO_CART, payload })
}

export function* setDeleteProductAction({ payload }) {
    yield put({ type: DELETE_CART, payload })
}