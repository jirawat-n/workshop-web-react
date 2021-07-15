
import { takeEvery, all } from 'redux-saga/effects'
import { ADD_TO_CART_REQ, DELETE_CART_REQ } from '../saga/actionTypes'
import { setAddProductAction, setDeleteProductAction } from '../saga/counter.action'

function* watchAddProductAction() {
    yield takeEvery(ADD_TO_CART_REQ, setAddProductAction)
}

function* watchDeleteProductAction() {
    yield takeEvery(DELETE_CART_REQ, setDeleteProductAction)
}

export default function* rootSaga() {
    yield all([
        watchAddProductAction(),
        watchDeleteProductAction(),]
    )
}