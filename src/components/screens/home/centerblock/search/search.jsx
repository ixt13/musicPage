import styles from './search.module.css'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider'

function Search(props) {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    props.inputSearch('')
  }, [props.page])
  return (
    <div className={styles.centerblock__search}>
      <svg className={`${styles.search__svg} ${styles[theme]}`}>
        <use href={'/img/icon/sprite.svg#icon-search'}></use>
      </svg>
      <input
        onChange={(e) => {
          props.inputSearch(e.target.value)
        }}
        className={`${styles.search__text} ${styles[theme]}`}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default Search
