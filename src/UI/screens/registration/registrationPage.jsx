import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { regUser } from '../../../api/userApi/registration'
import logo from '../../../assets/logo.svg'
import Styles from '../log-in/LogRegPages.module.css'

function RegForm() {
  const { handleSendForm, data } = regUser()

  const navigate = useNavigate()
  const [userLogin, setLogin] = useState('')
  const [userPassword, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const formData = {
    email: userLogin,
    password: userPassword,
    username: userLogin,
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
              placeholder="Введите почтовый адрес"
              autoComplete="current-login"
            ></input>

            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className={Styles.login_form_input_style}
              type="password"
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
          </div>

          <div className={Styles.login_buttons}>
            <button
              onClick={() => {
                handleSendForm(formData)
              }}
              className={Styles.login_login_button}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegForm
