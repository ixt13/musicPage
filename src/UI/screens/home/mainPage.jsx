import { useContext } from 'react'
import { ThemeContext } from '../../../contextProviders/ThemeProvider'
import { TracksProvider } from '../../../contextProviders/trackBarProvider'
import CenterBlockFilter from '../../components/centerblock/filter/filter'
import CenterBlockSearch from '../../components/centerblock/search/search'
import NavMenu from '../../components/navMenu/navMenu'
import Sidebar from '../../components/sideBar/sideBar'
import Bar from '../../components/trackBar/trackBar'
import { TracksContainer } from '../../components/tracksContainer/tracksContainer'
import styles from './mainPage.module.css'
function MainPage({ page }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.wrapper} ${
        theme === 'dark' ? styles.wrapperDark : styles.wrapperLight
      }`}
    >
      <TracksProvider>
        <main className={styles.main}>
          <NavMenu />

          <div className={styles.centerblock}>
            <CenterBlockSearch />
            <div
              className={`${styles.centerblock__h2}  `}
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
            >
              {page === 'main' ? 'Треки' : 'Избранные Треки'}
            </div>
            <CenterBlockFilter />

            <TracksContainer page={page} />
          </div>
          <Sidebar />
        </main>

        <Bar />
      </TracksProvider>
    </div>
  )
}

export default MainPage
