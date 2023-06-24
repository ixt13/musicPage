import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './components/screens/home/mainPage.jsx'
//import LoginPage from './LoginPage'
//import RegPage from './registrationPage'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
)
