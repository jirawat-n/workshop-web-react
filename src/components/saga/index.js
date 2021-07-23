import { takeEvery, all } from 'redux-saga/effects'
import { ADD_TO_CART_REQ, FETCT_SUBMIT_REQ, DELETE_CART_REQ, FETCH_START, FETCH_END, FETCH_ERROR, FETCT_CHECKOUT_REQ, ADD_PRODUCT_AND_AUTH_REQ, STATUS_INVOICE_REQ, SEARCH_PRODUCT_REQ, UPDATE_PRODUCT_REQ, SORT_PRODUCT_REQ, SET_AUTH_REQ, FETCH_AUTH_REQ, FETCH_PRODUCT_REQ, FETCH_CART_REQ, ADD_TO_STORE_REQ, DELETE_PRODUCT_AND_AUTH_REQ } from './actionTypes'
import { setAuth } from '../saga/counter.action'
import { setAddProductAction, setDeleteProductAction } from '../saga/counter.action'
import { startFetch, endFetch, errorFetch } from './StatusActions'
import { fetchAuthAsync } from '../actions/AuthActions'
import { fetchCartAsync, fetchDeleteCartAsync, fetchUpdateCartAsync } from '../actions/AddtoCartAction'
import { fetchCartStoreAsync, seeStore } from '../actions/FerchCartAction'
import { FetchSort, FetchSearch } from '../actions/sortAction'
import { fetchProductView } from '../actions/ProductAction'
import { FetchInvoice } from '../actions/InvoiceAction'
import { FetchInvoiceSubmit } from '../actions/InvoiceSubmitAction'
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
//--------------------------------------------------------------------------
// Watcher ของการเพิ่มเข้าตะกร้าสินค้า API
function* watchAddProductAPIAction() {
    yield takeEvery(ADD_PRODUCT_AND_AUTH_REQ, fetchCartAsync)
}
// Watcher ของการดูตะกร้าสินค้า API
function* watchSeeProductAPIAction() {
    yield takeEvery(FETCH_CART_REQ, fetchCartStoreAsync)
}
// Watcher ของการลบตะกร้าสินค้า API
function* watchAddDeleteAPIAction() {
    yield takeEvery(DELETE_PRODUCT_AND_AUTH_REQ, fetchDeleteCartAsync)
}
// Watcher ของการดูตะกร้าสินค้า API
function* watchADDtoStorection() {
    yield takeEvery(ADD_TO_STORE_REQ, seeStore)
}
// Watcher ของการ Sort ตะกร้าสินค้า API
function* watchSortProduct() {
    yield takeEvery(SORT_PRODUCT_REQ, FetchSort)
}

// Watcher ของการ Search สินค้า API
function* watchSearchProduct() {
    yield takeEvery(SEARCH_PRODUCT_REQ, FetchSearch)
}

// Watcher ของการ Update สินค้า API
function* watchUpdateProduct() {
    yield takeEvery(UPDATE_PRODUCT_REQ, fetchUpdateCartAsync)
}

// Watcher ของการ ดู Status Invoice API
function* watchStatusInvoice() {
    yield takeEvery(FETCT_CHECKOUT_REQ, FetchInvoice)
}
// Watcher ของการ Submit Invoice API
function* watchSubmitInvoice() {
    yield takeEvery(FETCT_SUBMIT_REQ, FetchInvoiceSubmit)
}


function* watchProduct() {
    yield takeEvery(FETCH_PRODUCT_REQ, fetchProductView)
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
        watchAddProductAPIAction(),
        watchSeeProductAPIAction(),
        watchADDtoStorection(),
        watchAddDeleteAPIAction(),
        watchSortProduct(),
        watchSearchProduct(),
        watchProduct(),
        watchUpdateProduct(),
        watchStatusInvoice(),
        watchSubmitInvoice(),
    ]
    )
}