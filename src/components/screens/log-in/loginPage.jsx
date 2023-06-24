import logo from './logo.svg'
import styles from './LogRegPages.module.css'

function loginForm() {
  return (
    <div className={styles.login_form}>
      <div className={styles.form}>
        <img className={styles.login_logo} src={logo} alt="logo" />
        <form className={styles.form} action="">
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
            <button className={styles.login_login_button}>Войти</button>
            <button className={styles.login_reg_button}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default loginForm
