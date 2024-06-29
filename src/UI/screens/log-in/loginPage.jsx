import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import styles from './LogRegPages.module.css'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logUser } from '../../../api/userApi/login'

import IconBxLoaderCircle from '../../../assets/icons/IconBxLoaderCircle'
function LoginForm() {
  const navigate = useNavigate()

  const [loginPlaceHolder, setLoginPlacehoder] = useState('Логин')
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Пароль')
  const [errorInfo, setErrorInfo] = useState('')
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const body = {
    email: userLogin,
    password: userPassword,
  }

  const { handleLog, isPending, isSuccess, errorData } = logUser()

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])

  useEffect(() => {
    if (errorData) {
      setIsError(true)
      if (errorData.email && !userLogin.length) {
        setLoginPlacehoder(errorData.email)
      } else if (errorData.email && userLogin.length) {
        setErrorInfo(errorData.email)
      }
      if (errorData.password && !userPassword.length) {
        setPasswordPlaceholder(errorData.password)
      } else if (errorData.password && userPassword.length) {
        setErrorInfo(errorData.password)
      }

      if (errorData.detail) {
        setErrorInfo(errorData.detail)
      }
    }
  }, [errorData])

  const resetErrors = () => {
    setIsError(false)
    setLoginPlacehoder('Логин')
    setPasswordPlaceholder('Пароль')
    setErrorInfo('')
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
              resetErrors()
            }}
            className={`${styles.login_form_input_style}  ${
              isError ? styles.errorTextContent : ''
            }`}
            name="login"
            type="text"
            placeholder={loginPlaceHolder}
            autoComplete="current-login"
          ></input>

          <input
            onChange={(e) => {
              setUserPassword(e.target.value)
              resetErrors()
            }}
            className={`${styles.login_form_input_style}  ${
              isError ? styles.errorTextContent : ''
            }`}
            name="password"
            type="password"
            placeholder={passwordPlaceholder}
            autoComplete="current-password"
          ></input>
        </div>
        <div className={styles.errorContainer}>{errorInfo}</div>
        <div className={styles.login_buttons}>
          <button
            onClick={() => {
              handleLog(body)
            }}
            className={styles.login_login_button}
            disabled={isPending}
          >
            {isPending ? (
              <IconBxLoaderCircle className={styles.loadingIcon} />
            ) : (
              'Войти'
            )}
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
