import { useNavigate } from 'react-router-dom'
import styles from './sideBar.module.css'

import { useDispatch } from 'react-redux'

function Sidebar(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userName = localStorage.getItem('username')

  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={`${styles.sidebar__personal_name} ${styles.dark}`}>
          {userName}
        </p>
      </div>
      <div className={styles.sidebar__block}> </div>
    </div>
  )
}

export default Sidebar
