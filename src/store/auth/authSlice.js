import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated', //not-authenticated, authenticated, checking
  uid: null,
  email: null,
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
    },
    logout: state => {
      state.status = 'not-authenticated'
      uid = null
      email = null
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
