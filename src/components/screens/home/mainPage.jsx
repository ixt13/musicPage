import styles from './mainPage.module.css'
import NavMenu from './navMenu/navMenu.jsx'
import CenterBlockSearch from './centerblock/search/search.jsx'
import CenterBlockFilter from './centerblock/filter/filter.jsx'

import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'
import PlayListItem from '../home/centerblock/content/playListItem/playListItem'
import Bar from './bar/bar.jsx'
import Sidebar from './sideBar/sideBar.jsx'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMainPageTracks } from '../../../redux/slicers/allTracksData'
import { setSelectedTrackData } from '../../../redux/slicers/allTracksData'
import { setFavPageTracks } from '../../../redux/slicers/allTracksData'
import { setSelectedPage } from '../../../redux/slicers/allTracksData'
import { useState } from 'react'
function MainPage(props) {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const user = localStorage.getItem('login')
  const accessToken = localStorage.getItem('token')

  const [renderMainPageTracksData, setRenderMainPageTracks] = useState([])
  const [renderFavTracksData, setRenderFavTracksData] = useState([])
  const mainData = useSelector((state) => state.allTracks.mainPageTracks)
  const favData = useSelector((state) => state.allTracks.favPageTracks)

  function handleFilterReset() {
    setRenderMainPageTracks(mainData)
    setRenderFavTracksData(favData)
  }
  function handleFilterArtist(page, author) {
    if (page === 'main') {
      setRenderMainPageTracks(mainData.filter((el) => el.author === author))
    } else if (page === 'myTracks') {
      setRenderFavTracksData(favData.filter((el) => el.author === author))
    }
  }
  function handleFilterYear(filter) {
    console.log(filter)

    if (filter === 'descendent') {
      props.page === 'main'
        ? setRenderMainPageTracks(
            mainData
              .filter((item) => item.release_date)
              .sort((a, b) => b.release_date.localeCompare(a.release_date))
          )
        : setRenderFavTracksData(
            favData
              .filter((item) => item.release_date)
              .sort((a, b) => b.release_date.localeCompare(a.release_date))
          )
    }

    if (filter === 'ascendent') {
      props.page === 'main'
        ? setRenderMainPageTracks(
            mainData
              .filter((item) => item.release_date)
              .sort((a, b) => a.release_date.localeCompare(b.release_date))
          )
        : setRenderFavTracksData(
            favData
              .filter((item) => item.release_date)
              .sort((a, b) => a.release_date.localeCompare(b.release_date))
          )
    }
  }
  function getMainPageAllTracks() {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => {
        dispatch(setMainPageTracks(response.data))
        console.log(response)
        setRenderMainPageTracks(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function getFavTracks() {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        dispatch(setFavPageTracks(response.data))
        setRenderFavTracksData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  function handleSetTrackLink(link) {
    dispatch(setSelectedTrackData(link))
  }
  useEffect(() => {
    if (props.page === 'myTracks') {
      getFavTracks()
      dispatch(setSelectedPage('myTracks'))
    } else if (props.page === 'main') {
      getMainPageAllTracks()
      dispatch(setSelectedPage('main'))
    }
  }, [props.page])
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
              Треки
            </div>
            <CenterBlockFilter
              selectedPage={props.page}
              artistFilter={handleFilterArtist}
              reset={handleFilterReset}
              yearFilter={handleFilterYear}
            />

            <div className={styles.centerblock__content}>
              <PlayListTitle />
              <div className={styles.content__playlist}>
                {props.page === 'main' && renderMainPageTracksData
                  ? renderMainPageTracksData.map((el) => (
                      <PlayListItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                        author={el.author}
                        album={el.album}
                        duration={el.duration_in_seconds}
                        url={el.track_file}
                        page="main"
                        setLinkTrack={handleSetTrackLink}
                        updateTracks={getMainPageAllTracks}
                        updateFavs={getFavTracks}
                        liked={el.stared_user.some(
                          (favTrack) => favTrack.email === user
                        )}
                      />
                    ))
                  : props.page === 'myTracks' && renderFavTracksData
                  ? renderFavTracksData.map((el) => (
                      <PlayListItem
                        key={el.id}
                        name={el.name}
                        id={el.id}
                        author={el.author}
                        album={el.album}
                        duration={el.duration_in_seconds}
                        url={el.track_file}
                        page="myTracks"
                        setLinkTrack={handleSetTrackLink}
                        updateFavs={getFavTracks}
                        updateTracks={getMainPageAllTracks}
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

export default MainPage
