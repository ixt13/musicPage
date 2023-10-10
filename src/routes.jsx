import { Routes, Route } from 'react-router-dom'
import MainPage from './components/screens/home/mainPage'
import LoginPage from './components/screens/log-in/loginPage'
import RegistrationPage from './components/screens/registration/registrationPage.jsx'

import NotFound from './components/screens/notFound/notFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage page="main" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/mytracks" element={<MainPage page="myTracks" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    //test
  )
}

export default AppRoutes
