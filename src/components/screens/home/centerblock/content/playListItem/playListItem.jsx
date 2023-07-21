import styles from './playListItem.module.css'
import iconLike from '../../../../../../assets/icon/like.svg'
import iconTrack from '../../../../../../assets/icon/trackDarkIcon.svg'
import lightTrackIcon from '../../../../../../assets/icon/lightTrackIcon.svg'
import { useState, useEffect } from 'react'
import { ThemeContext } from '../../../../ThemeProvider/ThemeProvider'
import { useContext } from 'react'

function PlayListItem() {
  const { theme } = useContext(ThemeContext)

  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (showSkeleton) {
    return (
      <div className={styles.playlist__item}>
        <div className={styles.skeletonPositions}>
          <div className={styles.track__title}>
            <div
              className={`${styles.track__title_image} ${styles.skeleton}`}
            ></div>
            <div
              className={styles.skeleton}
              style={{ width: '356px', height: '20px' }}
            >
              <a className={styles.track__title_link} href="#"></a>
            </div>
          </div>

          <div
            className={`${styles.track__author}  ${styles.skeleton} `}
            style={{ width: '322px', height: '20px' }}
          >
            <a className={styles.track__author_link} href="#"></a>
          </div>
          <div
            className={`${styles.track__album} ${styles.skeleton}`}
            style={{ width: '246px', height: '20px' }}
          >
            <a className={styles.track__album_link} href="#"></a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <img
              className={styles.track__title_svg}
              src={theme === 'dark' ? iconTrack : lightTrackIcon}
              alt="#"
            />
          </div>
          <div className={styles.track__title_text}>
            <a
              className={`${styles.track__title_link} ${styles[theme]}`}
              href="#"
            >
              xxxxx
            </a>
          </div>
        </div>

        <div className={styles.track__author}>
          <a
            className={`${styles.track__author_link} ${styles[theme]}`}
            href="#"
          >
            xxxx
          </a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__album_link} href="#">
            xxxxx
          </a>
        </div>
        <div className={styles.track__time}>
          <img className={styles.track__time_svg} src={iconLike} alt="" />
          <span className={styles.track__time_text}>4:44</span>
        </div>
      </div>
    </div>
  )
}
export default PlayListItem
