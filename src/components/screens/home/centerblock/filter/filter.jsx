import styles from './filter.module.css'
import { useState } from 'react'
import FilterArtist from './filterList/artist/artist'
import FilterYear from './filterList/year/year'
import FilterGenre from './filterList/genre/genre'
import { useContext } from 'react'
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider'
import axios from 'axios'
function Filter(props) {
  const { theme } = useContext(ThemeContext)
  const [showActiveClass, setshowActiveClass] = useState(null)
  const [showArtistFilter, setShowArtistFilter] = useState(false)
  const [showYearFilter, setShowYearFilter] = useState(false)
  const [showGenreFilter, setShowGenreFilter] = useState(false)

  const handleFilterClick = (filterType) => {
    if (showActiveClass === filterType) {
      setshowActiveClass(null)
      setShowYearFilter(false)
      setShowGenreFilter(false)
      setShowArtistFilter(false)
    } else {
      setshowActiveClass(filterType)
      setShowArtistFilter(filterType === 'artist')
      setShowYearFilter(filterType === 'year')
      setShowGenreFilter(filterType === 'genre')
    }
  }

  return (
    <div className={styles.centerblock__filter}>
      <div
        className={`${styles.filter__title} ${
          theme === 'dark' ? styles.colorWhite : styles.colorBlack
        }`}
      >
        Искать по:
      </div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button} ${styles._btn_text} ${
            styles[theme]
          } ${showActiveClass === 'artist' ? styles.btn_active : ''}`}
          onClick={() => {
            handleFilterClick('artist')
          }}
        >
          исполнителю
        </div>

        {showArtistFilter && (
          <FilterArtist filter={props.artistFilter} page={props.selectedPage} />
        )}
      </div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button} ${styles[theme]}  ${
            styles._btn_text
          } ${showActiveClass === 'year' ? styles.btn_active : ''}`}
          onClick={() => handleFilterClick('year')}
        >
          году выпуска
        </div>
        {showYearFilter && (
          <FilterYear page={props.selectedPage} filter={props.yearFilter} />
        )}
      </div>
      <div className={styles.filter_set}>
        <div
          className={`${styles.filter__button} ${styles[theme]}  ${
            styles._btn_text
          } ${showActiveClass === 'genre' ? styles.btn_active : ''}`}
          onClick={() => handleFilterClick('genre')}
        >
          жанру
        </div>
        {showGenreFilter && (
          <FilterGenre page={props.selectedPage} filter={props.genreFilter} />
        )}
      </div>
      <button
        className={`${styles.filter__button} ${styles[theme]}  ${
          styles._btn_text
        } ${showActiveClass === 'genre' ? styles.btn_active : ''}`}
        onClick={() => {
          props.reset()
        }}
      >
        Reset Filters
      </button>
    </div>
  )
}
export default Filter
