import styles from './sideBar.module.css'
import classicIconPlaylist from '../../../../assets/icon/Frame 5.png'
import electronicIconPlaylist from '../../../../assets/icon/Frame 3.png'
import rockIconPlaylist from '../../../../assets/icon/Frame 4.png'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'
import { useNavigate } from 'react-router-dom'
import { setSelectedPage } from '../../../../redux/slicers/allTracksData'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
function Sidebar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const mainData = useSelector((state) => state.allTracks.mainPageTracks)
  const userName = localStorage.getItem('username')

  function getFromStringCompilationId(string) {
    return string.slice(-1)
  }

  useEffect(() => {
    if (!mainData.track_file) {
      props.updateMainTracks()
    }
    if (props.selectedPage !== 'main' || 'myTracks') {
      props.updateCompilationTracks(
        getFromStringCompilationId(props.selectedPage)
      )
    }
  }, [])
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
