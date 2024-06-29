import { useSelector } from 'react-redux'
import { setLikeTrack } from '../../../../api/musicHooks/setLikeTrack'
import { useRemoveTrack } from '../../../../api/userApi/deleteFromFav'
import { ReactComponent as LikeIcon } from '../../../../assets/icons/like.svg'
import { ReactComponent as MelodyIcon } from '../../../../assets/icons/melody.svg'
import styles from './trackInfo.module.scss'

export const TrackInfo = () => {
  const { deleteTrack, isSuccess } = useRemoveTrack()
  const { handleLike, data } = setLikeTrack()

  const trackData = useSelector((state) => state.music.currentTrackData)

  const liked = useSelector((state) => state.music.isLiked)

  return (
    <div className={styles.trackData}>
      <div className={styles.trackImg}>
        <MelodyIcon className={styles.melodySvg} />
      </div>

      <div className={styles.trackInfo}>
        <p>{trackData ? trackData.name : ''}</p>
        <p>{trackData ? trackData.author : ''}</p>
      </div>
      <LikeIcon
        onClick={() => {
          if (liked) {
            deleteTrack(trackData.id)
          } else {
            handleLike(trackData.id)
          }
        }}
        className={styles.likeIcon}
        fill={liked ? '#D3D3D3' : 'transparent'}
      />
    </div>
  )
}
