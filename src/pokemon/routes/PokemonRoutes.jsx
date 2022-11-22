import { Routes, Route, Navigate } from 'react-router-dom'
import PokemonPage from '../pages/PokemonPage'

const PokemonRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<PokemonPage />}
      />
      <Route
        path="/*"
        element={<Navigate to="/" />}
      />
    </Routes>
  )
}

export default PokemonRoutes
