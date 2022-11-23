import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedPokemon: null,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, { payload }) => {
      state.selectedPokemon = payload
    },
  },
})

export const { selectPokemon } = pokemonSlice.actions
