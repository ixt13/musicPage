import styles from './mainPage.module.css'
import NavMenu from './navMenu/navMenu.jsx'
import CenterBlockSearch from './centerblock/search/search.jsx'
import CenterBlockFilter from './centerblock/filter/filter.jsx'

import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'

import Bar from './bar/bar.jsx'
import Sidebar from './sideBar/sideBar.jsx'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import {
  setSelectedTrackData,
  setRenderFavTracksData,
  setRenderMainPageTracks,
  setFavPageTracks,
  setMainPageTracks,
} from '../../../redux/slicers/allTracksData'
import PlaylistBox from './centerblock/content/playListBox/playListBox'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MainPage(props) {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const user = localStorage.getItem('login')
  const accessToken = localStorage.getItem('token')

  const mainData = useSelector((state) => state.allTracks.mainPageTracks)
  const favData = useSelector((state) => state.allTracks.favPageTracks)
  const [search, setSearch] = useState([])
  function handleFilterReset() {
    dispatch(setRenderMainPageTracks(mainData))
    dispatch(setRenderFavTracksData(favData))
  }
  function handleInputSearch(value) {
    if (props.page === 'main') {
      dispatch(
        setRenderMainPageTracks(
          search.filter(
            (item) =>
              item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.author.toLowerCase().includes(value.toLowerCase())
          )
        )
      )
    } else {
      dispatch(
        setRenderFavTracksData(
          search.filter(
            (item) =>
              item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.author.toLowerCase().includes(value.toLowerCase())
          )
        )
      )
    }
  }
  function handleFilterGenre(page, genre) {
    if (page === 'main') {
      dispatch(
        setRenderMainPageTracks(mainData.filter((el) => el.genre === genre))
      )
    } else if (page === 'myTracks') {
      dispatch(
        setRenderFavTracksData(favData.filter((el) => el.genre === genre))
      )
    }
  }
  function handleFilterArtist(page, author) {
    if (page === 'main') {
      dispatch(
        setRenderMainPageTracks(mainData.filter((el) => el.author === author))
      )
    } else if (page === 'myTracks') {
      dispatch(
        setRenderFavTracksData(favData.filter((el) => el.author === author))
      )
    }
  }
  function handleFilterYear(filter) {
    if (filter === 'descendent') {
      props.page === 'main'
        ? dispatch(
            setRenderMainPageTracks(
              mainData
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
        : dispatch(
            setRenderFavTracksData(
              favData
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
    }

    if (filter === 'ascendent') {
      props.page === 'main'
        ? dispatch(
            setRenderMainPageTracks(
              mainData
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
        : dispatch(
            setRenderFavTracksData(
              favData
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
    }
  }
  function getMainPageAllTracks() {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then((response) => {
        dispatch(setMainPageTracks(response.data))

        dispatch(setRenderMainPageTracks(response.data))
        if (props.page === 'main') {
          setSearch(response.data)
        }
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
        dispatch(setRenderFavTracksData(response.data))
        if (props.page === 'myTracks') {
          setSearch(response.data)
        }
      })
      .catch((error) => {
        console.log(error)

        if (props.page === 'myTracks') {
          navigate('/login')
          localStorage.removeItem('username')
        }
      })
  }
  function handleSetTrackLink(link) {
    dispatch(setSelectedTrackData(link))
  }
  useEffect(() => {
    getFavTracks()

    getMainPageAllTracks()
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
            <CenterBlockSearch
              inputSearch={handleInputSearch}
              page={props.page}
            />
            <div className={`${styles.centerblock__h2}  ${styles[theme]}`}>
              Треки
            </div>
            <CenterBlockFilter
              selectedPage={props.page}
              artistFilter={handleFilterArtist}
              reset={handleFilterReset}
              yearFilter={handleFilterYear}
              genreFilter={handleFilterGenre}
            />

            <div className={styles.centerblock__content}>
              <PlayListTitle />
              <div className={styles.content__playlist}>
                <PlaylistBox
                  selectedPage={props.page}
                  isUser={user}
                  setSelectedTrackLink={handleSetTrackLink}
                  updateMainTracks={getMainPageAllTracks}
                  updateFavTracks={getFavTracks}
                />
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
