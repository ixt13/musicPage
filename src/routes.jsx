import { Routes, Route } from 'react-router-dom'
import MainPage from './UI/screens/home/mainPage'

import NotFound from './UI/screens/notFound/notFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/mytracks" element={<MainPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
