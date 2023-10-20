import styles from './artist.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../../../ThemeProvider/ThemeProvider'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function GenreFilter(props) {
  const { theme } = useContext(ThemeContext)
  const mainTracks = useSelector((state) => state.allTracks.mainPageTracks)
  const favTracks = useSelector((state) => state.allTracks.favPageTracks)
  const compilTracks1 = useSelector(
    (state) => state.allTracks.compilationTracks1
  )
  const compilTracks2 = useSelector(
    (state) => state.allTracks.compilationTracks2
  )
  const compilTracks3 = useSelector(
    (state) => state.allTracks.compilationTracks3
  )
  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <div className={styles.filter_box}>
        <div className={styles.list}>
          {(props.page === 'main'
            ? mainTracks
            : props.page === 'myTracks'
            ? favTracks
            : props.page === 'compilation1'
            ? compilTracks1
            : props.page === 'compilation2'
            ? compilTracks2
            : props.page === 'compilation3'
            ? compilTracks3
            : ''
          )
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
