import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const PokemonCard = () => {
  const { selectedPokemon } = useSelector(state => state.pokemon)
  const { name, abilities, img } = selectedPokemon
  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate(-1)
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <img
          className="hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
          src={img}
          alt=""
        />
        <div className="flex flex-col bg-gray-100 p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase text-gray-900 ">
            {name}
          </h5>

          <div>
            <h6 className="mb-2 text-lg text-gray-800 font-semibold tracking-tight">
              Abilities:
            </h6>
            <ul className="list-disc ml-8">
              {abilities.map((ability, abilityIdx) => (
                <li
                  key={abilityIdx}
                  className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                >
                  {ability.name}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleClickButton}
            className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 transition duration-150 ease-in"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}
