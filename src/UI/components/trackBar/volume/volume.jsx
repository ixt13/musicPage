import iconVolume from '../../../../assets/icon/volume.svg'
import styles from './volume.module.scss'
export const VolumeBlock = ({ setVolumeValue, volumeValue }) => {
  const handleVolumeChange = (value) => {
    setVolumeValue(value)
  }
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <img
            className={styles.volume__svg}
            src={iconVolume}
            alt="volumeIcon"
          />
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            onChange={(e) => {
              handleVolumeChange(e.target.value)
            }}
            value={volumeValue}
            className={`${styles.volume__progress_line} ${styles._btn}`}
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.01"
          />
        </div>
      </div>
    </div>
  )
}
