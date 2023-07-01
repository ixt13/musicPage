import styles from './artist.module.css'

function GenreFilter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          <div className={styles.listItem}>Michael Jackson</div>
          <div className={styles.listItem}>Frank Sinatra</div>
          <div className={styles.listItem}>Calvin Harris</div>
          <div className={styles.listItem}>Zhu</div>
          <div className={styles.listItem}>Arctic Monkeys</div>
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
