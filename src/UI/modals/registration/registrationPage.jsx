import logo from '../../../assets/logo.svg'
import Styles from '../log-in/LogRegPages.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function regForm() {
  const navigate = useNavigate()
  const [userLogin, setLogin] = useState('')
  const [userPassword, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [disabledBtn, setDisableBtn] = useState(true)

  function notify(data, text) {
    toast[data](text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }
  const data = {
    email: userLogin,
    password: userPassword,
    username: userLogin,
  }
  useEffect(() => {
    if (userPassword !== repeatedPassword) {
      setShowError(true)
      console.log('error')
    } else {
      setShowError(false)
      setDisableBtn(true)
    }

    if (
      userPassword.length &&
      repeatedPassword.length &&
      userPassword === repeatedPassword
    ) {
      setDisableBtn(false)
    }
  }, [repeatedPassword, userPassword])
  function handleRegisterUser() {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(
        userPassword
      )
    ) {
      notify(
        'error',
        'Пароль должен содержать как минимум одну строчную букву (a-z), одну заглавную букву (A-Z), одну цифру (0-9) и один специальный символ из: !@#$%^&*_=+- и быть длиной от 8 до 12 символов.'
      )

      return
    }
    axios
      .post('https://skypro-music-api.skyeng.tech/user/signup/', data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(() => {
        notify('success', 'Успешная регистрация')
        setTimeout(() => {
          navigate('/login')
        }, 900)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div className={Styles.login_form}>
      <div className={Styles.form}>
        <img className={Styles.login_logo} src={logo} alt="logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          action="submit"
        >
          <div className={Styles.login_inputs}>
            <input
              onChange={(e) => {
                setLogin(e.target.value)
              }}
              className={Styles.login_form_input_style}
              type="text"
              pattern="[^@\s]+@[^@\s]+"
              placeholder="Введите почтовый адрес"
              autoComplete="current-login"
            ></input>

            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className={Styles.login_form_input_style}
              type="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
              title="Пароль должен содержать как минимум одну строчную букву (a-z), одну заглавную букву (A-Z), одну цифру (0-9) и один специальный символ из: !@#$%^&*_=+- и быть длиной от 8 до 12 символов."
              placeholder="Пароль"
              autoComplete="current-password"
            ></input>

            <input
              onChange={(e) => {
                setRepeatedPassword(e.target.value)
              }}
              className={Styles.login_form_input_style}
              type="password"
              placeholder="Повторите пароль"
              autoComplete="current-password"
            ></input>
            {showError ? (
              <div
                style={{
                  color: 'red',

                  position: 'absolute',
                  top: '420px',
                }}
              >
                Пароли не совпадают
              </div>
            ) : (
              ''
            )}
          </div>

          <div className={Styles.login_buttons}>
            <button
              disabled={disabledBtn}
              onClick={handleRegisterUser}
              className={Styles.login_login_button}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default regForm
