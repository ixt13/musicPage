import { useContext } from 'react'
import { ThemeContext } from '../../../../../contextProviders/ThemeProvider'
import styles from './filterSelectBox.module.scss'

function FilterSelectBox({ hideOnBlurHandle }) {
  const theme = useContext(ThemeContext)

  return (
    <div
      onMouseLeave={() => {
        hideOnBlurHandle(0)
      }}
      className={`${styles.filterContainer} ${styles[theme]}   `}
    >
      <div className={styles.container}>
        <div className={styles.list}></div>
      </div>
    </div>
  )
}

export default FilterSelectBox
