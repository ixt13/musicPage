import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login' }) {
  const isAllowed = Cookies.get('token')

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}
export default ProtectedRoute
