import styles from './mainPage.module.css'
import NavMenu from './navMenu/navMenu.jsx'
import CenterBlockSearch from './centerblock/search/search.jsx'
import CenterBlockFilter from './centerblock/filter/filter.jsx'

import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'
import { setCompilationTracks } from '../../../redux/slicers/allTracksData'
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
  setRenderCompilationTracks1,
  setRenderCompilationTracks2,
  setRenderCompilationTracks3,
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
  const compilTracks1 = useSelector(
    (state) => state.allTracks.compilationTracks1
  )
  const compilTracks2 = useSelector(
    (state) => state.allTracks.compilationTracks2
  )
  const compilTracks3 = useSelector(
    (state) => state.allTracks.compilationTracks3
  )
  const [search, setSearch] = useState([])
  function handleFilterReset() {
    dispatch(setRenderMainPageTracks(mainData))
    dispatch(setRenderFavTracksData(favData))
    dispatch(setRenderCompilationTracks1(compilTracks1))
    dispatch(setRenderCompilationTracks2(compilTracks2))
    dispatch(setRenderCompilationTracks3(compilTracks3))
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
    }
    if (props.page === 'myTracks') {
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
    if (props.page === 'compilation1') {
      dispatch(
        setRenderCompilationTracks1(
          search.filter(
            (item) =>
              item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.author.toLowerCase().includes(value.toLowerCase())
          )
        )
      )
    }
    if (props.page === 'compilation2') {
      dispatch(
        setRenderCompilationTracks2(
          search.filter(
            (item) =>
              item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.author.toLowerCase().includes(value.toLowerCase())
          )
        )
      )
    }
    if (props.page === 'compilation3') {
      dispatch(
        setRenderCompilationTracks3(
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
    }
    if (page === 'myTracks') {
      dispatch(
        setRenderFavTracksData(favData.filter((el) => el.genre === genre))
      )
    }
    if (page === 'compilation1') {
      dispatch(
        setRenderCompilationTracks1(
          compilTracks1.filter((el) => el.genre === genre)
        )
      )
    }
    if (page === 'compilation2') {
      dispatch(
        setRenderCompilationTracks2(
          compilTracks2.filter((el) => el.genre === genre)
        )
      )
    }
    if (page === 'compilation3') {
      dispatch(
        setRenderCompilationTracks3(
          compilTracks3.filter((el) => el.genre === genre)
        )
      )
    }
  }
  function handleFilterArtist(page, author) {
    if (page === 'main') {
      dispatch(
        setRenderMainPageTracks(mainData.filter((el) => el.author === author))
      )
    }
    if (page === 'myTracks') {
      dispatch(
        setRenderFavTracksData(favData.filter((el) => el.author === author))
      )
    }
    if (page === 'compilation1') {
      dispatch(
        setRenderCompilationTracks1(
          compilTracks1.filter((el) => el.author === author)
        )
      )
    }
    if (page === 'compilation2') {
      dispatch(
        setRenderCompilationTracks2(
          compilTracks2.filter((el) => el.author === author)
        )
      )
    }
    if (page === 'compilation3') {
      dispatch(
        setRenderCompilationTracks3(
          compilTracks3.filter((el) => el.author === author)
        )
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
        : props.page === 'myTracks'
        ? dispatch(
            setRenderFavTracksData(
              favData
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
        : props.page === 'compilation1'
        ? dispatch(
            setRenderCompilationTracks1(
              compilTracks1
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
        : props.page === 'compilation2'
        ? dispatch(
            setRenderCompilationTracks2(
              compilTracks2
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
        : props.page === 'compilation3'
        ? dispatch(
            setRenderCompilationTracks3(
              compilTracks3
                .filter((item) => item.release_date)
                .sort((a, b) => b.release_date.localeCompare(a.release_date))
            )
          )
        : ''
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
        : props.page === 'myTracks'
        ? dispatch(
            setRenderFavTracksData(
              favData
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
        : props.page === 'compilation1'
        ? dispatch(
            setRenderCompilationTracks1(
              compilTracks1
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
        : props.page === 'compilation2'
        ? dispatch(
            setRenderCompilationTracks2(
              compilTracks2
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
        : props.page === 'compilation3'
        ? dispatch(
            setRenderCompilationTracks3(
              compilTracks3
                .filter((item) => item.release_date)
                .sort((a, b) => a.release_date.localeCompare(b.release_date))
            )
          )
        : ''
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
      .catch(() => {
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
    if (props.page === 'main') {
      getMainPageAllTracks()
    } else if (props.page === 'myTracks') {
      getFavTracks()
    }
  }, [props.page])

  function getCompilation(compilID) {
    axios
      .get(`https://skypro-music-api.skyeng.tech/catalog/selection/${compilID}`)
      .then((response) => {
        if (compilID === '1') {
          dispatch(setRenderCompilationTracks1(response.data.items))
        }
        if (compilID === '2') {
          dispatch(setRenderCompilationTracks2(response.data.items))
        }
        if (compilID === '3') {
          dispatch(setRenderCompilationTracks3(response.data.items))
        }
        dispatch(
          setCompilationTracks({
            page: `compilation${compilID}`,
            data: response.data.items,
          })
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }
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
                  updateCompilationTracks={getCompilation}
                />
              </div>
            </div>
          </div>
          <Sidebar
            showImages={true}
            getCompils={getCompilation}
            updateMainTracks={getMainPageAllTracks}
            selectedPage={props.page}
            updateCompilationTracks={getCompilation}
          />
        </main>
        <Bar
          selectedPage={props.page}
          updateMainTracks={getMainPageAllTracks}
          updateFavTracks={getFavTracks}
          updateCompilationTracks={getCompilation}
        />
      </div>
    </div>
  )
}

export default MainPage
