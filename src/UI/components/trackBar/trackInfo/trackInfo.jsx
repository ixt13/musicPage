import { ReactComponent as LikeIcon } from '../../../../assets/icons/like.svg'
import styles from './trackInfo.module.scss'
export const TrackInfo = () => {
  return (
    <div className={styles.trackData}>
      <div className={styles.trackImg}></div>

      <div className={styles.trackInfo}>
        <p>sdsdsd</p>
        <p>sdsds</p>
      </div>
      <LikeIcon />
    </div>
  )
}
