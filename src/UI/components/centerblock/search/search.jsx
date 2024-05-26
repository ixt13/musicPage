import { useContext } from 'react'
import { ThemeContext } from '../../../../contextProviders/ThemeProvider'
import styles from './search.module.css'

function Search(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.centerblock__search}>
      <svg className={`${styles.search__svg} ${styles[theme]}`}>
        <use href={'/img/icon/sprite.svg#icon-search'}></use>
      </svg>
      <input
        className={`${styles.search__text} ${styles[theme]}`}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default Search
