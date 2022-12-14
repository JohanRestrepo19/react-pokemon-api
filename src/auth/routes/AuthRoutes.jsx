import { Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>
  )
}

export default AuthRoutes
