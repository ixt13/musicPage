import logo from '../../../assets/logo.svg'
import styles from './LogRegPages.module.css'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../redux/slicers/userLogData'
function loginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const data = {
    email: userLogin,
    password: userPassword,
  }

  function getToken() {
    axios
      .post(`https://skypro-music-api.skyeng.tech/user/token/`, data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        localStorage.setItem('token', response.data.access)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  function handleLogin() {
    if (userLogin.length && userPassword.length) {
      axios
        .post('https://skypro-music-api.skyeng.tech/user/login/', data, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.id) {
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('login', userLogin)
            localStorage.setItem('password', userPassword)

            dispatch(setUserData(response.data))
            getToken()

            navigate('/')
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
    return
  }
  return (
    <div className={styles.login_form}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className={styles.form}
        action="submit"
      >
        <img className={styles.login_logo} src={logo} alt="logo" />
        <div className={styles.login_inputs}>
          <input
            onChange={(e) => {
              setUserLogin(e.target.value)
            }}
            className={styles.login_form_input_style}
            name="login"
            type="text"
            placeholder="Логин"
            autoComplete="current-login"
          ></input>

          <input
            onChange={(e) => {
              setUserPassword(e.target.value)
            }}
            className={styles.login_form_input_style}
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
          ></input>
        </div>

        <div className={styles.login_buttons}>
          <button
            onClick={() => {
              handleLogin()
            }}
            className={styles.login_login_button}
          >
            Войти
          </button>
          <button className={styles.login_reg_button}>
            <Link className={styles.buttonText} to="/registration">
              Зарегистрироваться
            </Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default loginForm
