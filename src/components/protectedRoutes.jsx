import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
function ProtectedRoute({ children, redirectPath = '/login' }) {
  const isAllowed = Cookies.get('token')

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
export default ProtectedRoute
