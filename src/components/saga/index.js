import { takeEvery, all } from 'redux-saga/effects'
import { ADD_TO_CART_REQ, DELETE_CART_REQ, FETCH_START, FETCH_END, FETCH_ERROR, SET_AUTH, SET_AUTH_REQ,FETCH_AUTH_REQ } from './actionTypes'
import { setAuth } from '../saga/counter.action'
import { setAddProductAction, setDeleteProductAction } from '../saga/counter.action'
import { startFetch, endFetch, errorFetch } from './StatusActions'
import { fetchAuthAsync } from '../actions/AuthActions'
// Status ของ Login
//--------------------------------------------------------------------------
function* watchFetchStart() {
    yield takeEvery(FETCH_START, startFetch)
}
function* watchFetchEnd() {
    yield takeEvery(FETCH_END, endFetch)
}
function* watchFetchError() {
    yield takeEvery(FETCH_ERROR, errorFetch)
}
//--------------------------------------------------------------------------
// Watcher ของ Login
function* watchSetAuth() {
    yield takeEvery(SET_AUTH_REQ, setAuth)
}
function* watchSetAuthAsyn() {
    yield takeEvery(FETCH_AUTH_REQ, fetchAuthAsync)
}
//--------------------------------------------------------------------------
// Watcher ของการเพิ่มเข้าตะกร้าสินค้า
function* watchAddProductAction() {
    yield takeEvery(ADD_TO_CART_REQ, setAddProductAction)
}
// Watcher ของการลบสินค้าในตะกร้าสินค้า
function* watchDeleteProductAction() {
    yield takeEvery(DELETE_CART_REQ, setDeleteProductAction)
}
// Export ออกไป
export default function* rootSaga() {
    yield all([
        watchAddProductAction(),
        watchDeleteProductAction(),
        watchFetchStart(),
        watchFetchEnd(),
        watchFetchError(),
        watchSetAuth(),
        watchSetAuthAsyn(),
    ]
    )
}