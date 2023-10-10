import styles from './playListItem.module.css'
import iconLike from '../../../../../../assets/icon/like.svg'
import iconTrack from '../../../../../../assets/icon/trackDarkIcon.svg'
import iconLiked from '../../../../../../assets/icon/Vector 15.svg'
import lightTrackIcon from '../../../../../../assets/icon/lightTrackIcon.svg'
import { useState, useEffect } from 'react'
import { ThemeContext } from '../../../../ThemeProvider/ThemeProvider'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedPage } from '../../../../../../redux/slicers/allTracksData'
import playGif from '../../../../../../assets/music-disc.gif'
import axios from 'axios'

function PlayListItem(props) {
  const dispatch = useDispatch()
  const [trackTime, setTrackTime] = useState(0)
  const [showPlayGif, setShowPlayGif] = useState(false)
  const trackData = useSelector((state) => state.allTracks.selectedTrackData)
  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    setTrackTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
  }
  const accessToken = localStorage.getItem('token')
  const userPassword = localStorage.getItem('password')
  const userLogin = localStorage.getItem('login')
  const data = {
    email: userLogin,
    password: userPassword,
  }

  function handleToggleLike(method) {
    const requestOptions = {
      url: `https://skypro-music-api.skyeng.tech/catalog/track/${props.id}/favorite/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    if (method === 'post') {
      requestOptions.method = 'post'
      requestOptions.data = data
    } else if (method === 'delete') {
      requestOptions.method = 'delete'
    }

    axios(requestOptions)
      .then((response) => {
        if (response && props.page === 'main' && method === 'post') {
          props.updateTracks()
          props.updateFavs()
        } else if (response && props.page === 'main' && method === 'delete') {
          props.updateTracks()
          props.updateFavs()
        }

        if (response && props.page === 'myTracks' && method === 'delete') {
          props.updateFavs()
          props.updateTracks()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    formatDuration(props.duration)
  }, [])

  useEffect(() => {
    if (props.url === trackData.track_file) {
      setShowPlayGif(true)
    } else {
      setShowPlayGif(false)
    }
  }, [trackData.track_file])
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div
          onClick={() => {
            props.setLinkTrack(props.url)
            dispatch(setSelectedPage(props.page))
          }}
          className={styles.track__title}
        >
          <div className={styles.track__title_image}>
            <img
              src={
                (theme === 'dark' && showPlayGif) ||
                (theme === 'light' && showPlayGif)
                  ? playGif
                  : theme === 'dark'
                  ? iconTrack
                  : lightTrackIcon
              }
              className={styles.track__title_svg}
              alt="#"
            />
          </div>

          <div className={styles.track__title_text}>
            <div
              className={`${styles.track__title_link} ${styles[theme]}`}
              href="#"
            >
              {props.name}
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            props.setLinkTrack(props.url, props.author, props.name)
          }}
          className={styles.track__author}
        >
          <div
            className={`${styles.track__author_link} ${styles[theme]}`}
            href="#"
          >
            {props.author}
          </div>
        </div>
        <div
          onClick={() => {
            props.setLinkTrack(props.url, props.author, props.name)
          }}
          className={styles.track__album}
        >
          <div className={styles.track__album_link} href="#">
            {props.album}
          </div>
        </div>
        <div className={styles.track__time}>
          <img
            onClick={() => {
              props.liked || props.page === 'myTracks'
                ? handleToggleLike('delete')
                : handleToggleLike('post')
            }}
            className={styles.track__time_svg}
            src={
              props.liked || props.page === 'myTracks' ? iconLiked : iconLike
            }
            alt=""
          />
          <span className={styles.track__time_text}>{trackTime}</span>
        </div>
      </div>
    </div>
  )
}
export default PlayListItem
