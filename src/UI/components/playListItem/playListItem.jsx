import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as IconLike } from '../../../assets/icons/like.svg'
import { ReactComponent as TrackIcon } from '../../../assets/icons/melody.svg'

import { useLocation, useNavigate } from 'react-router-dom'
import { setLikeTrack } from '../../../api/musicHooks/setLikeTrack'
import { useRemoveTrack } from '../../../api/userApi/deleteFromFav'
import { ghPagesPath } from '../../../consts'
import { formatDuration } from '../../../hooks/fns'
import {
  setCurrentPlaylistTarget,
  setCurrentTrackData,
  setCurrentTrackUrl,
  setIsLiked,
  setTrackBarIsVisible,
} from '../../../redux/slicers/musicProcesses'
import styles from './playListItem.module.scss'

function PlayListItem({
  name,
  album,
  author,
  duration_in_seconds,
  stared_user,
  trackUrl,
  id,
}) {
  const navigate = useNavigate()
  const currentTrackUrl = useSelector((state) => state.music.currentTrackUrl)
  const loggedUserID = localStorage.getItem('userID')
  const location = useLocation().pathname
  const dispatch = useDispatch()
  const { deleteTrack, isSuccess, isError } = useRemoveTrack()
  const { handleLike, data, error } = setLikeTrack()

  if (isError || error) {
    dispatch(setTrackBarIsVisible(false))
    navigate(`${ghPagesPath}${'/login'}`)
  }

  const isLiked = () => {
    const data = stared_user.find((el) => el.id === parseInt(loggedUserID))

    if (data !== undefined) {
      return true
    }
    return false
  }
  const setLocationPlaylist = () => {
    if (location === `${ghPagesPath}${'/'}`) {
      return 'main'
    }
    return 'fav'
  }
  const setTrackData = () => {
    dispatch(setCurrentTrackUrl(trackUrl))
    dispatch(setCurrentTrackData({ name: name, author: author, id: id }))
    dispatch(setTrackBarIsVisible(true))
    dispatch(setCurrentPlaylistTarget(setLocationPlaylist()))

    if (location === `${ghPagesPath}${'/'}`) {
      dispatch(setIsLiked(isLiked()))
    } else {
      dispatch(setIsLiked(true))
    }
  }

  const handleLikeToggle = () => {
    if (location === `${ghPagesPath}${'/'}`) {
      if (isLiked()) {
        deleteTrack(id)
      } else {
        handleLike(id)
      }
    } else {
      deleteTrack(id)
    }
  }
  return (
    <div
      className={`${styles.playlist__item} ${
        currentTrackUrl === trackUrl ? styles.target : ''
      } `}
      onClick={() => {
        setTrackData()
      }}
    >
      <div className={styles.trackImg}>
        <TrackIcon
          className={`${styles.melodySvg}  ${
            currentTrackUrl === trackUrl ? styles.rotate_center : ''
          }`}
        />
      </div>
      <div className={`${styles.track__title_text}  ${styles.pos}`}>{name}</div>

      <div className={`${styles.track__author} ${styles.pos}`}>{author}</div>

      <div className={`${styles.track__album} ${styles.pos}`}>{album}</div>

      <div className={styles.track__time}>
        <IconLike
          className={styles.likeIcon}
          onClick={(e) => {
            e.stopPropagation()
            handleLikeToggle()
          }}
          fill={
            (location === `${ghPagesPath}${'/'}` && isLiked()) ||
            location === `${ghPagesPath}${'/myTracks'}`
              ? '#696969'
              : 'transparent'
          }
        />
        <span className={styles.track__time_text}>
          {formatDuration(duration_in_seconds)}
        </span>
      </div>
    </div>
  )
}
export default PlayListItem
