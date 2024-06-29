import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setLikeTrack } from '../../../api/musicHooks/setLikeTrack'
import { useRemoveTrack } from '../../../api/userApi/deleteFromFav'
import {
  setMainPlaylist,
  setSecondPlaylist,
} from '../../../redux/slicers/musicProcesses'
import PlayListItem from '../playListItem/playListItem'
import styles from './tracksContainer.module.scss'
export const TracksContainer = ({ mainPlaylist, secondPlaylist, useFav }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation().pathname

  const [tracksContainer, setTracksContainer] = useState([])

  // if (location === '/myTracks' && useFav.isError) {
  //   dispatch(setTrackBarIsVisible(false))
  //   navigate('/login')
  // }

  const { handleLike } = setLikeTrack()
  const { deleteTrack } = useRemoveTrack()
  /////////////////////-- set playlistContainer on switch page
  useEffect(() => {
    dispatch(setMainPlaylist(mainPlaylist))
    dispatch(setSecondPlaylist(secondPlaylist))
    if (location === '/' && mainPlaylist) {
      setTracksContainer(mainPlaylist)
    } else if (location === '/myTracks' && secondPlaylist) {
      setTracksContainer(secondPlaylist)
    }
  }, [location, mainPlaylist, secondPlaylist])
  //////////////////////--

  return (
    <>
      <div className={styles.TracksContainer}>
        {tracksContainer.map((track) => (
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
