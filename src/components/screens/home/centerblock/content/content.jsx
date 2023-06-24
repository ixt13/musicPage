import styles from './content.module.css'
import PlayListTitle from './playListTitle/playListTitle.jsx'
import PlayListItem from './playListItem/playListItem.jsx'
function Content() {
  return (
    <div className={styles.centerblock__content}>
      <PlayListTitle></PlayListTitle>
      <div className={styles.content__playlist}>
        <PlayListItem></PlayListItem>
      </div>
    </div>
  )
}

export default Content
