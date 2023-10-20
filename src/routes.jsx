import { Routes, Route } from 'react-router-dom'
import MainPage from './components/screens/home/mainPage'
import LoginPage from './components/screens/log-in/loginPage'
import RegistrationPage from './components/screens/registration/registrationPage.jsx'
import ProtectedRoute from './protectedRoute'
import NotFound from './components/screens/notFound/notFound'
import PlaylistBox from './components/screens/home/centerblock/content/playListBox/playListBox'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage page="main" />} />
      <Route path="/compilation1" element={<MainPage page="compilation1" />} />
      <Route path="/compilation2" element={<MainPage page="compilation2" />} />
      <Route path="/compilation3" element={<MainPage page="compilation3" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route
        path="/mytracks"
        element={
          <MainPage page="myTracks">
            <ProtectedRoute>
              <PlaylistBox />
            </ProtectedRoute>
          </MainPage>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
