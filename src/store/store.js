import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { pokemonSlice } from './pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
})
