import styles from './year.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../ThemeProvider/ThemeProvider'
import { useDispatch } from 'react-redux'

import { useState } from 'react'
function FilterYear(props) {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  const [isChekedDescendent, setCheckedDescendent] = useState(false)
  const [isChekedAscendent, setCheckedAscendent] = useState(false)

  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.input_box}>
        <label className={`${styles.input}  ${styles[theme]}`}>
          <input
            onClick={() => {
              setCheckedDescendent(true)
              setCheckedAscendent(false)
              dispatch(setSelectedPage(props.page))
            }}
            onChange={() => props.filter('descendent')}
            className={styles.radio}
            name="year"
            type="radio"
            checked={isChekedDescendent}
          />
          Более новые
        </label>
        <label className={`${styles.input}  ${styles[theme]}`}>
          <input
            onClick={() => {
              setCheckedAscendent(true)
              setCheckedDescendent(false)
              dispatch(setSelectedPage(props.page))
            }}
            onChange={() => props.filter('ascendent')}
            className={styles.radio}
            name="year"
            type="radio"
            checked={isChekedAscendent}
          />
          Более старые
        </label>
      </div>
    </div>
  )
}
export default FilterYear
