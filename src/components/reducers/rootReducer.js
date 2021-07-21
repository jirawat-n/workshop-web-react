import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { authReducer } from './authReducer'
import { statusReducer } from './statusReducer'
import { ProductReducer } from "./productReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    status: statusReducer,
    product: ProductReducer,
    sort: sortReducer,
})