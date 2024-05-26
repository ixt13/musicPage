import { useContext, useState } from 'react'
import { ThemeContext } from '../../../../contextProviders/ThemeProvider'
import styles from './filter.module.scss'
import FilterSelectBox from './filterSelectBox/filterSelectBox'

function Filter(props) {
  const { theme } = useContext(ThemeContext)

  const [subMenuIndex, setSubMenuIndex] = useState(0)

  const toggleSubMenu = (index) => {
    subMenuIndex === index ? setSubMenuIndex(0) : setSubMenuIndex(index)
  }

  return (
    <div className={styles.centerblock__filter}>
      <div className={`${styles.filter__title}  `}>Искать по:</div>
      <div className={styles.filter_set}>
        <button
          onClick={() => {
            toggleSubMenu(1)
          }}
          className={`${styles.filter__button} ${styles._btn_text} ${styles[theme]} `}
        >
          артистам
        </button>

        {subMenuIndex === 1 && (
          <FilterSelectBox hideOnBlurHandle={setSubMenuIndex} />
        )}
      </div>
      <div className={styles.filter_set}>
        <button
          onClick={() => {
            toggleSubMenu(2)
          }}
          className={`${styles.filter__button} ${styles._btn_text} ${styles[theme]} `}
        >
          году
        </button>
        {subMenuIndex === 2 && (
          <FilterSelectBox hideOnBlurHandle={setSubMenuIndex} />
        )}
      </div>
      <div className={styles.filter_set}>
        <button
          onClick={() => {
            toggleSubMenu(3)
          }}
          className={`${styles.filter__button} ${styles._btn_text} ${styles[theme]} `}
        >
          жанру
        </button>

        {subMenuIndex === 3 && (
          <FilterSelectBox hideOnBlurHandle={setSubMenuIndex} />
        )}
      </div>
      <button
        className={`${styles.filter__button} ${styles._btn_text} ${styles[theme]} `}
      >
        reset
      </button>
    </div>
  )
}
export default Filter
