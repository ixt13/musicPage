import { useDispatch } from 'react-redux'
import { getAllTracksQuery } from '../../../api/musicHooks/getAllTracks'
import { getFavsTracksQuery } from '../../../api/musicHooks/getFavTracks'
import CenterBlockFilter from '../../components/centerblock/filter/filter'
import CenterBlockSearch from '../../components/centerblock/search/search'
import NavMenu from '../../components/navMenu/navMenu'
import Sidebar from '../../components/sideBar/sideBar'
import { TracksContainer } from '../../components/tracksContainer/tracksContainer'
import styles from './mainPage.module.css'
function MainPage({ page }) {
  const dispatch = useDispatch()

  const mainTracksQuery = getAllTracksQuery()
  const favTracksQuery = getFavsTracksQuery()

  return (
    <div className={`${styles.wrapper} ${styles.wrapperDark}`}>
      <main className={styles.main}>
        <NavMenu />

        <div className={styles.centerblock}>
          <CenterBlockSearch />
          <div
            className={`${styles.centerblock__h2}  `}
            style={{ color: 'white' }}
          >
            {page === 'main' ? 'Треки' : 'Избранные Треки'}
          </div>
          <CenterBlockFilter />

          <TracksContainer
            mainPlaylist={mainTracksQuery.data}
            secondPlaylist={favTracksQuery.data}
            useFav={favTracksQuery}
          />
        </div>
        <Sidebar />
      </main>
    </div>
  )
}

export default MainPage
