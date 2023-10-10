import styles from './artist.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function GenreFilter(props) {
  const { theme } = useContext(ThemeContext)
  const mainTracks = useSelector((state) => state.allTracks.mainPageTracks)
  const favTracks = useSelector((state) => state.allTracks.favPageTracks)
  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          {(props.page === 'main' ? mainTracks : favTracks)
            .filter(
              (el, index, array) =>
                array.findIndex((item) => item.author === el.author) === index
            )
            .map((el) => (
              <div
                onClick={() => {
                  props.filter(props.page, el.author)
                }}
                key={el.id}
                className={`${styles.listItem} ${styles[theme]}`}
              >
                {el.author}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
