import { Route, Routes } from 'react-router-dom'
import MainPage from './UI/screens/home/mainPage'
import LoginForm from './UI/screens/log-in/loginPage'
import NotFound from './UI/screens/notFound/notFound'
import RegForm from './UI/screens/registration/registrationPage'
import ProtectedRoute from './protectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage page="main" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/registration" element={<RegForm />} />

      <Route
        path="/mytracks"
        element={
          <ProtectedRoute>
            <MainPage page="myTracks" />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
