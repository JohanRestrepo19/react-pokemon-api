import { Navbar } from '../components'

const PokemonLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}

export default PokemonLayout
