import { startFetch, endFetch, errorFetch } from './StatusActions'
import axios from 'axios'
export const SET_AUTH = 'SET_AUTH'

export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user,
    }
}

export function fetchAuthAsync(username, password) {
    return async function (dispatch) {

        dispatch(startFetch())
        axios.post(`http://127.0.0.1:8000/api/token/`, { username, password })
            .then(data => {
                const user = data
                console.log('User Naja', user)
                if (user) {
                    dispatch(setAuth(user))
                    dispatch(errorFetch(''))
                    dispatch(endFetch())
                }

            })
            .catch((error) => {
                console.log(error.response?.data || error);
                dispatch(setAuth(null))
                dispatch(errorFetch(error.response.data))
                dispatch(endFetch())
            })

        // const user = await signin(username, password)
    }
}