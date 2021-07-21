import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootSaga from '../saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from '../reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth'],
    blacklist: ['sort']
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)))
    let persistor = persistStore(store)
    sagaMiddleware.run(rootSaga)
    return { store, persistor }
}