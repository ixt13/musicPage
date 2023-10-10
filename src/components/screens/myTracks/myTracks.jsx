import styles from './mainPage.module.css'
import NavMenu from '../home/navMenu/navMenu'
import CenterBlockSearch from '../home/centerblock/search/search'
import CenterBlockFilter from '../home/centerblock/filter/filter.jsx'
import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'
import PlayListItem from '../home/centerblock/content/playListItem/playListItem'
import Bar from '../home/bar/bar.jsx'
import Sidebar from '../home/sideBar/sideBar.jsx'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'
import { setFavPageTracks } from '../../../redux/slicers/allTracksData'
import axios from 'axios'
function myTracks() {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  const accessToken = localStorage.getItem('token')
  const favTracksData = useSelector((state) => state.allTracks.favPageTracks)

  function getFavTracks() {
    if (favTracksData.length) {
      return
    } else {
      axios
        .get(
          'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          dispatch(setFavPageTracks(response.data))
          console.log('update')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  useEffect(() => {
    getFavTracks()
  }, [])
  return (
    <div
      className={`${styles.wrapper} ${
        theme === 'dark' ? styles.wrapperDark : styles.wrapperLight
      }`}
    >
      <div className={`${styles.container}    ${styles[theme]}`}>
        <main className={styles.main}>
          <NavMenu />
          <div className={styles.centerblock}>
            <CenterBlockSearch />
            <div className={`${styles.centerblock__h2}  ${styles[theme]}`}>
              Мои Треки
            </div>
            <CenterBlockFilter />
            <div className={styles.centerblock__content}>
              <PlayListTitle />
              <div className={styles.content__playlist}>
                {favTracksData
                  ? favTracksData.map((item) => (
                      <PlayListItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        author={item.author}
                        album={item.album}
                        duration={item.duration_in_seconds}
                        url={item.track_file}
                        page="main"
                      />
                    ))
                  : ''}
              </div>
            </div>
          </div>
          <Sidebar showImages={true} />
        </main>
        <Bar />
      </div>
    </div>
  )
}

export default myTracks
