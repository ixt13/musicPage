import styles from './genre.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'
function GenreFilter() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.filter}   ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          <div className={`${styles.listItem}   ${styles[theme]}`}>Рок</div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>Хип-хоп</div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>
            Поп-музыка
          </div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>Техно</div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>Инди</div>
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
