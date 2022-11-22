import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const startLogin = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials())
    const { ok, uid, errorMessage } = await loginWithEmailAndPassword({
      email,
      password,
    })
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, email }))
  }
}

export const startRegisterUser = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials())
    const { ok, uid, errorMessage } = await registerWithEmailAndPassword({
      email,
      password,
    })

    if (!ok) return dispatch(logout({ errorMessage }))
    dispatch(login({ uid, email }))
  }
}
