import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
function ProtectedRoute({ children }) {
  const logged = localStorage.getItem('username')
  let location = useLocation()
  console.log(page)
  const page = useSelector((state) => state.allTracks.selectedPage)
  if (!logged && page === 'myTracks') {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
export default ProtectedRoute
