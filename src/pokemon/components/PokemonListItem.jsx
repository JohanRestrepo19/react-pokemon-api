import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPokemonAbilities } from '../../api/fetchUtils'
import { selectPokemon } from '../../store/pokemon/pokemonSlice'

export const PokemonListItem = ({ name }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { refetch } = useQuery(
    ['pokemonInfo', name],
    () => fetchPokemonAbilities(name),
    {
      enabled: false,
    }
  )

  const handleClickItem = async () => {
    // TODO: Mejorar la implementación utilizando React Query.
    const { data: pokemonInfo } = await refetch()
    dispatch(selectPokemon({ name, ...pokemonInfo }))
    navigate('/pokemonInfo')
  }

  return (
    <div
      onClick={handleClickItem}
      className="flex bg-white rounded-lg justify-center items-center h-24 hover:text-slate-500 hover:scale-75 transition duration-500 ease-in cursor-pointer"
    >
      <h1>{name}</h1>
    </div>
  )
}
