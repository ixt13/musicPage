import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { regUser } from '../../../api/userApi/registration'
import IconBxLoaderCircle from '../../../assets/icons/IconBxLoaderCircle'
import logo from '../../../assets/logo.svg'
import styles from '../log-in/LogRegPages.module.css'

function RegForm() {
  const { handleSendForm, data, errorData, isPending } = regUser()

  const navigate = useNavigate()
  const [userLogin, setLogin] = useState('')
  const [userPassword, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [loginPlaceHolder, setLoginPlacehoder] = useState('Логин')
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Пароль')
  const [errorInfo, setErrorInfo] = useState('')

  const formData = {
    email: userLogin,
    password: userPassword,
    username: userLogin,
  }

  const resetErrors = () => {
    setErrorInfo('')
    setLoginPlacehoder('Логин')
    setPasswordPlaceholder('Пароль')
    setIsError(false)
  }
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
    }
  }, [errorData])

  return (
    <div className={styles.login_form}>
      <div className={styles.form}>
        <img className={styles.login_logo} src={logo} alt="logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          action="submit"
        >
          <div className={styles.login_inputs}>
            <input
              onChange={(e) => {
                setLogin(e.target.value)
                resetErrors()
              }}
              className={`${styles.login_form_input_style}  ${
                isError ? styles.errorTextContent : ''
              }`}
              type="text"
              placeholder={loginPlaceHolder}
              autoComplete="current-login"
            ></input>

            <input
              onChange={(e) => {
                setPassword(e.target.value)
                resetErrors()
              }}
              className={`${styles.login_form_input_style}  ${
                isError ? styles.errorTextContent : ''
              }`}
              type="password"
              placeholder={passwordPlaceholder}
              autoComplete="current-password"
            ></input>
          </div>
          <div className={styles.errorContainer}>{errorInfo}</div>
          <div className={styles.login_buttons}>
            <button
              onClick={() => {
                handleSendForm(formData)
              }}
              className={styles.login_login_button}
            >
              {' '}
              {isPending ? (
                <IconBxLoaderCircle className={styles.loadingIcon} />
              ) : (
                'Зарегистрироваться'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegForm
