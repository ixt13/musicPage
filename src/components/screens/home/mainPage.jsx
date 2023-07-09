import styles from './mainPage.module.css'
import NavMenu from './navMenu/navMenu.jsx'
import CenterBlockSearch from './centerblock/search/search.jsx'
import CenterBlockFilter from './centerblock/filter/filter.jsx'
import CenterBlockContent from './centerblock/content/content.jsx'
import PlayListTitle from './centerblock/content/playListTitle/playListTitle'
import Bar from './bar/bar.jsx'
import Sidebar from './sideBar/sideBar.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

function MainPage() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.wrapper} ${
        theme === 'dark' ? styles.wrapperDark : styles.wrapperLight
      }`}
    >
      <div className={`${styles.container}    ${styles[theme]}`}>
        <main className={styles.main}>
          <NavMenu />
          <div className={styles.centerblock}>
            <CenterBlockSearch />
            <div className={`${styles.centerblock__h2}  ${styles[theme]}`}>
              Треки
            </div>
            <CenterBlockFilter />
            <CenterBlockContent>
              <PlayListTitle />
            </CenterBlockContent>
          </div>
          <Sidebar showImages={true} />
        </main>
        <Bar />
      </div>
    </div>
  )
}

export default MainPage
