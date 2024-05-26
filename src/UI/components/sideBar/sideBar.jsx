import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import electronicIconPlaylist from '../../../assets/icon/Frame 3.png'
import rockIconPlaylist from '../../../assets/icon/Frame 4.png'
import classicIconPlaylist from '../../../assets/icon/Frame 5.png'
import { ThemeContext } from '../../../contextProviders/ThemeProvider'
import styles from './sideBar.module.css'

import { useDispatch } from 'react-redux'

function Sidebar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)

  const userName = localStorage.getItem('username')

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
              <div
                onClick={() => {
                  navigate('/compilation1')
                  props.getCompils('1')
                  dispatch(setSelectedPage('compilation1'))
                }}
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src={classicIconPlaylist}
                  alt="day's playlist"
                />
              </div>
            </div>
            <div className={styles.sidebar__item}>
              <div
                onClick={() => {
                  navigate('/compilation2')
                  props.getCompils('2')
                  dispatch(setSelectedPage('compilation2'))
                }}
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src={electronicIconPlaylist}
                  alt="day's playlist"
                />
              </div>
            </div>
            <div className={styles.sidebar__item}>
              <div
                onClick={() => {
                  navigate('/compilation3')
                  props.getCompils('3')
                  dispatch(setSelectedPage('compilation3'))
                }}
                className={styles.sidebar__link}
                href="#"
              >
                <img
                  className={styles.sidebar__img}
                  src={rockIconPlaylist}
                  alt="day's playlist"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
