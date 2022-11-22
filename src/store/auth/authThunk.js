import { loginWithEmailAndPassword } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

export const startLogin = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials())
    const { ok, uid, errorMessage } = loginWithEmailAndPassword({
      email,
      password,
    })
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, email }))
  }
}
