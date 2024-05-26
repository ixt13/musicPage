import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import styles from './LogRegPages.module.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logUser } from '../../../api/userApi/login'

function LoginForm() {
  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const body = {
    email: userLogin,
    password: userPassword,
  }

  const { data, handleLog, isPending, isSuccess, isError } = logUser()

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
    if (isError) {
      console.log(isError)
    }
  }, [isSuccess, isError])

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
              handleLog(body)
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

export default LoginForm
