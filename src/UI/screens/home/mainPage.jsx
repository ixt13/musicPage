import { useDispatch } from 'react-redux'
import { getAllTracksQuery } from '../../../api/musicHooks/getAllTracks'
import { getFavsTracksQuery } from '../../../api/musicHooks/getFavTracks'
import CenterBlockFilter from '../../components/centerblock/filter/filter'
import CenterBlockSearch from '../../components/centerblock/search/search'
import NavMenu from '../../components/navMenu/navMenu'
import Sidebar from '../../components/sideBar/sideBar'
import { TracksContainer } from '../../components/tracksContainer/tracksContainer'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './mainPage.module.css'
import { useEffect } from 'react'
import { ghPagesPath } from '../../../consts'
import { setTrackBarIsVisible } from '../../../redux/slicers/musicProcesses'
function MainPage({ page }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const mainTracksQuery = getAllTracksQuery()

  const favTracksQuery = getFavsTracksQuery()
  if (location === `${ghPagesPath}${'/myTracks'}` && favTracksQuery.isError) {
    dispatch(setTrackBarIsVisible(false))
    navigate(`${ghPagesPath}${'/login'}`)
  }
  // useEffect(() => {
  //   if (location === `${ghPagesPath}${'/myTracks'}` && favTracksQuery.isError) {
  //     navigate(`${ghPagesPath}${'/login'}`)
  //   }
  // }, [location])
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
