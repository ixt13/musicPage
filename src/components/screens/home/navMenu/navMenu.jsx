import { NavLink } from 'react-router-dom'
import styles from './navMenu.module.css'
import cn from 'classnames'

function NavMenu() {
  function showHide() {
    const burgerMenu = document.getElementById('burger')
    burgerMenu.classList.toggle(styles.nav__menu)
  }

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div
        className={`${styles.nav__burger}  ${styles._btn}`}
        onClick={showHide}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div id="burger" className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(styles._btn_text, { [styles.activeNavLink]: isActive })
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.menu__item}>
            <NavLink
              to="/myTracks"
              className={({ isActive }) =>
                cn(styles._btn_text, { [styles.activeNavLink]: isActive })
              }
            >
              Мой плейлист
            </NavLink>
          </li>
          <li className={styles.menu__item}>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(styles._btn_text, { [styles.activeNavLink]: isActive })
              }
            >
              Войти
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavMenu
