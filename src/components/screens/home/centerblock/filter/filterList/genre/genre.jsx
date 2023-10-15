import styles from './genre.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'
import { useSelector } from 'react-redux'
function GenreFilter(props) {
  const { theme } = useContext(ThemeContext)
  const mainTracksData = useSelector((state) => state.allTracks.mainPageTracks)
  const favTracksData = useSelector((state) => state.allTracks.favPageTracks)
  return (
    <div className={`${styles.filter}   ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          {(props.page === 'main' ? mainTracksData : favTracksData)
            .filter(
              (el, index, array) =>
                array.findIndex((item) => item.genre === el.genre) === index
            )
            .map((el) => (
              <div
                onClick={() => {
                  props.filter(props.page, el.genre)
                }}
                key={el.id}
                className={`${styles.listItem}   ${styles[theme]}`}
              >
                {el.genre}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
