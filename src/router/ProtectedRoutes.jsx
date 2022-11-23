import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({ status }) => {
  /* const { status } = useSelector(state => state.auth) */
  return status === 'authenticated' ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
