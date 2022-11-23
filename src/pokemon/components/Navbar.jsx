import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/authThunk'

export const Navbar = () => {
  const dispatch = useDispatch()
  const handleClickLogout = event => {
    event.preventDefault()
    dispatch(startLogout())
  }
  return (
    <nav className="shadow bg-white flex justify-between items-center p-4 mb-4 w-full">
      <h1 className="font-semibold text-lg">PokemonApi App</h1>
      <button
        className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-2xl p-2 w-ful transition duration-150 ease-in"
        onClick={handleClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}
