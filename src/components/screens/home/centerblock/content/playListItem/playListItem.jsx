import styles from './playListItem.module.css'
import iconLike from './like.svg'
import iconTrack from './note.svg'
function playListItem() {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <img className={styles.track__title_svg} src={iconTrack} alt="#" />
          </div>
          <div className={styles.track__title_text}>
            <a className={styles.track__title_link} href="#">
              xxxxx
            </a>
          </div>
        </div>

        <div className={styles.track__author}>
          <a className={styles.track__author_link} href="#">
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
export default playListItem
