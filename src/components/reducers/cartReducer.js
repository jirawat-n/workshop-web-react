// import { ADD_TO_CART, DELETE_CART } from '../actions/CartActions'
import { ADD_TO_CART, DELETE_CART } from '../actions/CartActions'
import { ADD_TO_STORE } from '../saga/actionTypes'
const initialState = {
    cart: [],
}


// Store ของ Redux
export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart
            const foundItem = state.cart.find((item) => item.id === action.payload.id)
            if (!foundItem) {
                updatedCart = [...state.cart, action.payload]
            } else {
                updatedCart = state.cart.map((item) => ({
                    ...item, quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity,
                }))
            }
            console.log('Update Success', updatedCart)
            return {
                ...state,
                cart: updatedCart,

            }
        case ADD_TO_STORE:
            console.log('action ของ เปโหลด', action.payload);
            return {
                ...state,
                cart: action.payload,
            }

        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }

        default:
            return state
    }
}