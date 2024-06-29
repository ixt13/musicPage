import { useState } from 'react'

import styles from './filter.module.scss'
import FilterSelectBox from './filterSelectBox/filterSelectBox'

function Filter(props) {
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
          className={`${styles.filter__button} ${styles._btn_text} ${styles.dark} `}
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
          className={`${styles.filter__button} ${styles._btn_text} ${styles.dark} `}
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
          className={`${styles.filter__button} ${styles._btn_text} ${styles.dark} `}
        >
          жанру
        </button>

        {subMenuIndex === 3 && (
          <FilterSelectBox hideOnBlurHandle={setSubMenuIndex} />
        )}
      </div>
      <button
        className={`${styles.filter__button} ${styles._btn_text} ${styles.dark} `}
      >
        reset
      </button>
    </div>
  )
}
export default Filter
