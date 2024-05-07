import { useContext } from 'react'

import styles from './mainPage.module.css'
import NavMenu from '../../components/navMenu/navMenu'
import CenterBlockSearch from '../../components/centerblock/search/search'
import CenterBlockFilter from '../../components/centerblock/filter/filter'
import PlayListTitle from '../../components/playListTitle/playListTitle'
import Bar from '../../components/trackBar/trackBar'
import Sidebar from '../../components/sideBar/sideBar'
import { ThemeContext } from '../../components/ThemeProvider/ThemeProvider'
import PlaylistBox from '../../components/playListBox/playListBox'

function MainPage(props) {
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

            <div className={styles.centerblock__content}>
              <PlayListTitle />
              <div className={styles.content__playlist}>
                <PlaylistBox />
              </div>
            </div>
          </div>
          <Sidebar />
        </main>
        <Bar />
      </div>
    </div>
  )
}

export default MainPage
