import { useEffect, useState } from 'react'
import { fetchPokemonData } from '../../api/fetchUtils'
import { PokemonListItem } from './PokemonListItem'

export const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([])

  // TODO: Mejorar la implementación con React Query.
  useEffect(() => {
    fetchPokemonData().then(data => setPokemonList(data))
  }, [])

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 self-center gap-4 px-8">
      {pokemonList.map((pokemon, pokemonIdx) => (
        <PokemonListItem
          key={pokemonIdx}
          name={pokemon.name}
        />
      ))}
    </div>
  )
}
