import styles from './filter.module.css'

import FilterArtist from './filterList/artist/artist'
import FilterYear from './filterList/genre/genre'
import FilterGenre from './filterList/genre/genre'

function Filter(props) {
  return (
    <div className={styles.centerblock__filter}>
      <div className={`${styles.filter__title}  `}>Искать по:</div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button} ${styles._btn_text}  `}
          onClick={() => {
            handleFilterClick('artist')
          }}
        >
          исполнителю
        </div>

        <FilterArtist filter={props.artistFilter} page={props.selectedPage} />
      </div>
      <div className={styles.filter_set}>
        <div className={`${styles.filter__button}   ${styles._btn_text}  `}>
          году выпуска
        </div>
        <FilterYear />
      </div>
      <div className={styles.filter_set}>
        <div className={`${styles.filter__button}    ${styles._btn_text}  `}>
          жанру
        </div>

        <FilterGenre page={props.selectedPage} filter={props.genreFilter} />
      </div>
      <button className={`${styles.filter__button} }  ${styles._btn_text}  `}>
        Reset Filters
      </button>
    </div>
  )
}
export default Filter
