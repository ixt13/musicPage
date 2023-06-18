import styles from './filter.module.css'

function filter() {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>Искать по:</div>
      <div className={`${styles.filter__button} ${styles._btn_text}`}>
        исполнителю
      </div>
      <div className={`${styles.filter__button}  ${styles._btn_text}`}>
        году выпуска
      </div>
      <div className={`${styles.filter__button}  ${styles._btn_text}`}>
        жанру
      </div>
    </div>
  )
}
export default filter
