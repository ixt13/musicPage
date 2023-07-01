import logo from '../../../assets/logo.svg'
import styles from './LogRegPages.module.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function loginForm() {
  const authButton = (event) => {
    event.preventDefault()
    Cookies.set('token', 'Authentified')

    console.log(Cookies.get('token'))
  }
  return (
    <div className={styles.login_form}>
      <form className={styles.form} action="">
        <img className={styles.login_logo} src={logo} alt="logo" />
        <div className={styles.login_inputs}>
          <input
            className={styles.login_form_input_style}
            type="text"
            placeholder="Логин"
            autoComplete="current-login"
          ></input>

          <input
            className={styles.login_form_input_style}
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
          ></input>
        </div>

        <div className={styles.login_buttons}>
          <button className={styles.login_login_button} onClick={authButton}>
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
