import styles from '../home/mainPage.module.css'
import NavMenu from '../home/navMenu/navMenu'
import CenterBlockSearch from '../home/centerblock/search/search'
import Bar from '../home/bar/bar'
import CenterBlockContent from '../home/centerblock/content/content'
import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'
import Sidebar from '../home/sideBar/sideBar'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
function MyTracks() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.wrapper} ${
        theme === 'dark' ? styles.wrapperDark : styles.wrapperLight
      }`}
    >
      <div className={`${styles.container}  ${styles[theme]}`}>
        <main className={styles.main}>
          <NavMenu />
          <div className={styles.centerblock}>
            <CenterBlockSearch />
            <div className={styles.centerblock__h2}>Мои Треки</div>

            <CenterBlockContent>
              <PlayListTitle />
            </CenterBlockContent>
          </div>
          <Sidebar showImages={false} />
        </main>
        <Bar />
      </div>
    </div>
  )
}
export default MyTracks
