export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART = 'DELETE_CART'
export const CLEAR_CART = 'CLEAR_CART'

// Action creators
export function addToCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    payload: addedProduct,
  }
}

export function deleteCart(id) {
  return {
    type: DELETE_CART,
    payload: id,
  }
}


export function clearCart() {
  return {
    type: CLEAR_CART,
  }
}

export function updateCart(addedProduct) {
  return {
    type: ADD_TO_CART,
    payload: addedProduct,
  }
}
