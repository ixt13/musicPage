import styles from './genre.module.css'

function GenreFilter() {
  return (
    <div className={styles.filter}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          <div className={styles.listItem}>Рок</div>
          <div className={styles.listItem}>Хип-хоп</div>
          <div className={styles.listItem}>Поп-музыка</div>
          <div className={styles.listItem}>Техно</div>
          <div className={styles.listItem}>Инди</div>
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
