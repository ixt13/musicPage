import styles from './search.module.css'

function Search(props) {
  return (
    <div className={styles.centerblock__search}>
      <svg className={`${styles.search__svg} ${styles.dark}`}>
        <use href={'/img/icon/sprite.svg#icon-search'}></use>
      </svg>
      <input
        className={`${styles.search__text} ${styles.dark}`}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  )
}
export default Search
