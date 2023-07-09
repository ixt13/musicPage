import styles from './artist.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'
function GenreFilter() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          <div className={`${styles.listItem}   ${styles[theme]}`}>
            Michael Jackson
          </div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>
            Frank Sinatra
          </div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>
            Calvin Harris
          </div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>Zhu</div>
          <div className={`${styles.listItem}   ${styles[theme]}`}>
            Arctic Monkeys
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
