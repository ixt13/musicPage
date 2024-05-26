import { useContext } from 'react'
import { getAllTracksQuery } from '../../../api/musicHooks/getAllTracks'
import { getFavsTracksQuery } from '../../../api/musicHooks/getFavTracks'
import { setLikeTrack } from '../../../api/musicHooks/setLikeTrack'
import { TracksContext } from '../../../contextProviders/trackBarProvider'
import PlayListItem from '../playListItem/playListItem'
import styles from './tracksContainer.module.scss'
export const TracksContainer = ({ page }) => {
  const mainTracksQuery = getAllTracksQuery()
  const favTracksQuery = getFavsTracksQuery()

  const { setCurrentPage, setCurrentTrackID, setCurrentTrackURL } =
    useContext(TracksContext)

  const { handleLike } = setLikeTrack()

  return (
    <>
      <div className={styles.TracksContainer}>
        {(page === 'main' && mainTracksQuery.data
          ? mainTracksQuery.data
          : page === 'myTracks' && favTracksQuery.data
          ? favTracksQuery.data
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
            page={page}
            like={() => {
              handleLike(track.id)
            }}
            selectTrack={() => {
              setCurrentPage(page)
              setCurrentTrackID(track.id)
              setCurrentTrackURL(track.track_file)
            }}
          />
        ))}
      </div>
    </>
  )
}
