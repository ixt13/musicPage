import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ghPagesPath } from '../../../consts'
import {
  setMainPlaylist,
  setSecondPlaylist,
} from '../../../redux/slicers/musicProcesses'
import PlayListItem from '../playListItem/playListItem'
import styles from './tracksContainer.module.scss'

export const TracksContainer = ({ mainPlaylist, secondPlaylist }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation().pathname

  /////////////////////-- set playlistContainer on switch page
  useEffect(() => {
    dispatch(setMainPlaylist(mainPlaylist))
    dispatch(setSecondPlaylist(secondPlaylist))
  }, [location, mainPlaylist, secondPlaylist])
  //////////////////////--

  return (
    <>
      <div className={styles.TracksContainer}>
        {(location === `${ghPagesPath}${'/'}` && mainPlaylist
          ? mainPlaylist
          : location === `${ghPagesPath}${'/myTracks'}` && secondPlaylist
          ? secondPlaylist
          : []
        ).map((track) => (
          <PlayListItem
            key={track.id}
            name={track.name}
            album={track.album}
            author={track.author}
            duration_in_seconds={track.duration_in_seconds}
            genre={track.genre}
            release_date={track.release_date}
            stared_user={track.stared_user}
            trackUrl={track.track_file}
            id={track.id}
          />
        ))}
      </div>
    </>
  )
}
