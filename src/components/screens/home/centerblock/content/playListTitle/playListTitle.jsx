import styles from './playListTitle.module.css'
import iconWatch from './watch.svg'
function playListTitle() {
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
export default playListTitle
