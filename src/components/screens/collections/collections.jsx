import styles from '../home/mainPage.module.css'
import NavMenu from '../home/navMenu/navMenu'
import CenterBlockSearch from '../home/centerblock/search/search'
import Bar from '../home/bar/bar'
import CenterBlockContent from '../home/centerblock/content/content'
import PlayListTitle from '../home/centerblock/content/playListTitle/playListTitle'
import Sidebar from '../home/sideBar/sideBar'
function Collections() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <NavMenu />
          <div className={styles.centerblock}>
            <CenterBlockSearch />
            <div className={styles.centerblock__h2}>Подборки</div>

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
export default Collections
