import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from './auth/routes/AuthRoutes'
import PokemonRoutes from './pokemon/routes/PokemonRoutes'

//TODO: Implementar la validación con firebase
const App = () => {
  const { status } = useSelector(state => state.auth)
  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route
          path="/*"
          element={<PokemonRoutes />}
        />
      ) : (
        <Route
          path="/auth/*"
          element={<AuthRoutes />}
        />
      )}
      <Route
        path="/*"
        element={<Navigate to="/auth/login" />}
      />
    </Routes>
  )
}

export default App
