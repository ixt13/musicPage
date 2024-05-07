import styles from './artist.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../ThemeProvider/ThemeProvider'

function GenreFilter(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}></div>
      </div>
    </div>
  )
}

export default GenreFilter
