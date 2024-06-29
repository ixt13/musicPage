import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg'
import { ghPagesPath } from '../../../consts'
import { setTrackBarIsVisible } from '../../../redux/slicers/musicProcesses'
import styles from './navMenu.module.css'
function NavMenu() {
  const logged = localStorage.getItem('token')
  const dispatch = useDispatch()
  function showHide() {
    const burgerMenu = document.getElementById('burger')
    burgerMenu.classList.toggle(styles.nav__menu)
  }

  return (
    <nav className={`${styles.main__nav} ${styles.main__nav_Dark}  `}>
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
              to={`${ghPagesPath}${'/'}`}
              className={({ isActive }) =>
                cn(styles._btn_text, styles.dark, {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.menu__item}>
            <NavLink
              to={`${ghPagesPath}${'/myTracks'}`}
              className={({ isActive }) =>
                cn(styles._btn_text, styles.dark, {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              Мой плейлист
            </NavLink>
          </li>
          <li
            onClick={() => {
              if (logged) {
                dispatch(setTrackBarIsVisible(false))
                localStorage.removeItem('token')
                localStorage.removeItem('userID')
              } else {
                dispatch(setTrackBarIsVisible(false))
              }
            }}
            className={styles.menu__item}
          >
            <NavLink
              to={`${ghPagesPath}${'/login'}`}
              className={({ isActive }) =>
                cn(styles._btn_text, styles.dark, {
                  [styles.activeNavLink]: isActive,
                })
              }
            >
              {logged ? 'Выйти' : 'Войти'}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavMenu
