import { Navigate } from 'react-router-dom'
import { ghPagesPath } from './consts'
function ProtectedRoute({ children, page }) {
  const tokenData = localStorage.getItem('token')

  if (!tokenData) {
    return <Navigate to={`${ghPagesPath}${'/login'}`} />
  }

  return children
}
export default ProtectedRoute
