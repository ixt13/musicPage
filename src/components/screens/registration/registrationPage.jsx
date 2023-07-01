import logo from '../../../assets/logo.png'
import Styles from '../log-in/LogRegPages.module.css'
function regForm() {
  return (
    <div className={Styles.login_form}>
      <div className={Styles.form}>
        <img className={Styles.login_logo} src={logo} alt="logo" />
        <form action="">
          <div className={Styles.login_inputs}>
            <input
              className={Styles.login_form_input_style}
              type="text"
              placeholder="Логин"
              autoComplete="current-login"
            ></input>

            <input
              className={Styles.login_form_input_style}
              type="password"
              placeholder="Пароль"
              autoComplete="current-password"
            ></input>

            <input
              className={Styles.login_form_input_style}
              type="password"
              placeholder="Повторите пароль"
              autoComplete="current-password"
            ></input>
          </div>

          <div className={Styles.login_buttons}>
            <button className={Styles.login_login_button}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default regForm
