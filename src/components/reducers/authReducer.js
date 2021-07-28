// import { SET_AUTH } from '../actions/AuthActions'
import { SET_AUTH, SET_AUTH_ERROR } from "../saga/actionTypes";
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: '',
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      if (action.payload) {
        console.log(action.payload.access);
        localStorage.setItem('token', action.payload.access)
        const expire_in = action.payload.expire_in
        const currentTime = Date.now() / 1000
        const time = currentTime + expire_in
        localStorage.setItem('expire_in', time)
      }
      return {
        user: action.payload,
      }
    case SET_AUTH_ERROR:
      return {
        error: action.payload,
      }

    default:
      return state
  }
}