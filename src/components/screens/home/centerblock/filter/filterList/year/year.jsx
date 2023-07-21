import styles from './year.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'

function FilterYear() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.input_box}>
        <label className={`${styles.input}  ${styles[theme]}`}>
          <input className={styles.radio} name="year" type="radio" />
          Более новые
        </label>
        <label className={`${styles.input}  ${styles[theme]}`}>
          <input className={styles.radio} name="year" type="radio" />
          Более старые
        </label>
      </div>
    </div>
  )
}
export default FilterYear
