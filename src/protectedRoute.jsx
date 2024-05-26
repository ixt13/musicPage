import { Navigate } from 'react-router-dom'
function ProtectedRoute({ children, page }) {
  const tokenData = localStorage.getItem('token')

  if (!tokenData) {
    return <Navigate to="/login" />
  }

  return children
}
export default ProtectedRoute
