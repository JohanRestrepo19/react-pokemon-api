import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated', //not-authenticated, authenticated, checking
  uid: null,
  email: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.uid = payload.uid
      state.email = payload.email
    },
    checkingCredentials: state => {
      state.status = 'checking'
      state.errorMessage = null
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.uid = null
      state.email = null
      state.errorMessage = payload?.errorMessage
    },
    cleanErrors: state => {
      state.errorMessage = null
    },
  },
})

export const { login, logout, checkingCredentials, cleanErrors } =
  authSlice.actions
