import { useContext } from 'react'
import iconVolume from '../../../../assets/icon/volume.svg'
import { ThemeContext } from '../../../../contextProviders/ThemeProvider'
import styles from './volume.module.scss'
export const VolumeBlock = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <img
            className={styles.volume__svg}
            src={theme === 'dark' ? iconVolume : volumeIconLight}
            alt="volumeIcon"
          />
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            onChange={(e) => {
              handleVolumeChange(e.target.value)
            }}
            className={`${styles.volume__progress_line} ${styles._btn}`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}
