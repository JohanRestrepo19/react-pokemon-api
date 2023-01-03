import { useQuery } from 'react-query'
import { fetchPokemonData } from '../../api/fetchUtils'
import { PokemonListItem } from './PokemonListItem'

export const PokemonGrid = () => {
  const pokemonsQuery = useQuery('pokemons', fetchPokemonData)

  return (
    <div>
      {pokemonsQuery.isLoading ? <div>Data is being loaded...</div> : null}
      {pokemonsQuery.isError ? <div>There was an error...</div> : null}
      {pokemonsQuery.isSuccess ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 self-center gap-4 px-8">
          {pokemonsQuery.data.map((pokemon, pokemonIdx) => (
            <PokemonListItem
              key={pokemonIdx}
              name={pokemon.name}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
