import cn from 'classnames'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import themeDarkIcon from '../../../assets/icon/darkThemeIcon.svg'
import themeLightIcon from '../../../assets/icon/lightThemeIcon.svg'
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg'
import { ThemeContext } from '../../../contextProviders/ThemeProvider'
import styles from './navMenu.module.css'
function NavMenu() {
  const logged = localStorage.getItem('username')
  const { theme, toggleTheme } = useContext(ThemeContext)

  function showHide() {
    const burgerMenu = document.getElementById('burger')
    burgerMenu.classList.toggle(styles.nav__menu)
  }

  return (
    <nav
      className={`${styles.main__nav} ${
        theme === 'dark' ? styles.main__nav_Dark : styles.main__nav_Light
      }  `}
    >
      <div
        className={`${styles.nav__burger}  ${styles._btn}  `}
        onClick={showHide}
      >
        <MenuIcon />
      </div>
      <div id="burger" className={`${styles.nav__menu} ${styles.nav__menuPos}`}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(styles._btn_text, styles[theme], {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.menu__item}>
            <NavLink
              to="/myTracks"
              className={({ isActive }) =>
                cn(styles._btn_text, styles[theme], {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              Мой плейлист
            </NavLink>
          </li>
          <li
            onClick={() => {
              if (logged !== '') localStorage.removeItem('username')
              localStorage.removeItem('token')
            }}
            className={styles.menu__item}
          >
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(styles._btn_text, styles[theme], {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              {logged ? 'Выйти' : 'Войти'}
            </NavLink>
          </li>
        </ul>
        <div className={styles.icon}>
          <img
            src={theme === 'light' ? themeLightIcon : themeDarkIcon}
            onClick={toggleTheme}
            alt="themeIcon"
          />
        </div>
      </div>
    </nav>
  )
}
export default NavMenu
