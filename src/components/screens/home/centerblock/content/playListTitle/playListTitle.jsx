import styles from './playListTitle.module.css'
import iconWatch from '../../../../../../assets/icon/watch.svg'
import { useState, useEffect } from 'react'
function PlayListTitle() {
  const [showSkeleton, setShowSkeleton] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (showSkeleton) {
    return (
      <div className={styles.content__title}>
        <div className={`${styles.playlist_title__col}  ${styles.col01}`}>
          Трек
        </div>
        <div className={`${styles.playlist_title__col}  ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.playlist_title__col}  ${styles.col03}`}>
          АЛЬБОМ
        </div>
      </div>
    )
  }
  return (
    <div className={styles.content__title}>
      <div className={`${styles.playlist_title__col}  ${styles.col01}`}>
        Трек
      </div>
      <div className={`${styles.playlist_title__col}  ${styles.col02}`}>
        ИСПОЛНИТЕЛЬ
      </div>
      <div className={`${styles.playlist_title__col}  ${styles.col03}`}>
        АЛЬБОМ
      </div>
      <div className={`${styles.playlist_title__col}  ${styles.col04}`}>
        <img className={styles.playlist_title__svg} src={iconWatch} alt="" />
      </div>
    </div>
  )
}
export default PlayListTitle
