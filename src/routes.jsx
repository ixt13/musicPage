import { Route, Routes } from 'react-router-dom'
import MainPage from './UI/screens/home/mainPage'
import LoginForm from './UI/screens/log-in/loginPage.jsx'
import NotFound from './UI/screens/notFound/notFound.jsx'
import RegForm from './UI/screens/registration/registrationPage.jsx'
import { ghPagesPath } from './consts.jsx'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${ghPagesPath}${'/'}`} element={<MainPage page="main" />} />
      <Route path={`${ghPagesPath}${'/login'}`} element={<LoginForm />} />
      <Route path={`${ghPagesPath}${'/login'}`} element={<RegForm />} />

      <Route
        path={`${ghPagesPath}${'/myTracks'}`}
        element={<MainPage page="myTracks" />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
