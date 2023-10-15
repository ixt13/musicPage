import { NavLink } from 'react-router-dom'
import styles from './sideBar.module.css'

import { useContext } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'

function Sidebar(props) {
  const { theme } = useContext(ThemeContext)

  const userName = localStorage.getItem('username')
  console.log(userName)
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={`${styles.sidebar__personal_name} ${styles[theme]}`}>
          {userName}
        </p>
        <div className={styles.sidebar__avatar}></div>
      </div>
      <div className={styles.sidebar__block}>
        {props.showImages && (
          <div className={styles.sidebar__list}>
            <div className={styles.sidebar__item}>
              <NavLink
                to="collections"
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </NavLink>
            </div>
            <div className={styles.sidebar__item}>
              <NavLink
                to="collections"
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </NavLink>
            </div>
            <div className={styles.sidebar__item}>
              <NavLink
                to="collections"
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
