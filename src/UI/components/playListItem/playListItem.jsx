import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as IconLike } from '../../../assets/icons/like.svg'
import { ReactComponent as TrackIcon } from '../../../assets/icons/trackIcon.svg'
import { ThemeContext } from '../../../contextProviders/ThemeProvider'
import { TracksContext } from '../../../contextProviders/trackBarProvider'
import { formatDuration } from '../../../hooks/fns'
import styles from './playListItem.module.scss'

function PlayListItem({
  name,
  album,
  author,
  duration_in_seconds,
  genre,
  release_date,
  like,
  stared_user,
  page,
  selectTrack,
}) {
  const { theme } = useContext(ThemeContext)
  const { setPage } = useContext(TracksContext)
  const loggedUserID = localStorage.getItem('userID')

  const location = useLocation().pathname
  const liked = (array, comp) => {
    return array.find((el) => el.id === comp)
  }

  return (
    <div
      className={styles.playlist__item}
      onClick={() => {
        setPage(location)
        selectTrack()
      }}
    >
      <TrackIcon className={styles.trackIcon} />

      <div className={`${styles.track__title_text}  ${styles.pos}`}>{name}</div>

      <div className={`${styles.track__author} ${styles.pos}`}>{author}</div>

      <div className={`${styles.track__album} ${styles.pos}`}>{album}</div>

      <div className={styles.track__time}>
        <IconLike
          onClick={(e) => {
            e.stopPropagation()
            like()
          }}
          className={styles.likeIcon}
          fill={
            page === 'myTracks'
              ? '#D3D3D3'
              : liked(stared_user, Number(loggedUserID))
              ? '#D3D3D3'
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
