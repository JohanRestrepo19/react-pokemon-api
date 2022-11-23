import { Navbar } from '../components'

const PokemonLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full">
      <Navbar />
      {children}
    </div>
  )
}

export default PokemonLayout
