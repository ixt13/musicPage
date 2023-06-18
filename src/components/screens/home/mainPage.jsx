import styles from './mainPage.module.css'
import NavMenu from './navMenu/navMenu.jsx'
import CenterBlockSearch from './centerblock/search/search.jsx'
import CenterBlockFilter from './centerblock/filter/filter.jsx'
import CenterBlockContent from './centerblock/content/content.jsx'
import PlayListTitle from './centerblock/content/playListTitle/playListTitle'
import Bar from './bar/bar.jsx'
import Sidebar from './sideBar/sideBar.jsx'
function mainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <NavMenu></NavMenu>
          <div className={styles.centerblock}>
            <CenterBlockSearch></CenterBlockSearch>
            <div className={styles.centerblock__h2}>Треки</div>
            <CenterBlockFilter></CenterBlockFilter>
            <CenterBlockContent>
              <PlayListTitle></PlayListTitle>
            </CenterBlockContent>
          </div>
          <Sidebar></Sidebar>
        </main>
        <Bar></Bar>
      </div>
    </div>
  )
}

export default mainPage
