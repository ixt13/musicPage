import styles from './sideBar.module.css'
import { useEffect, useState } from 'react'
function Sidebar() {
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (showSkeleton) {
    return (
      <div className={styles.main__sidebar}>
        <div className={styles.sidebar__personal}>
          <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
          <div className={styles.sidebar__avatar}></div>
        </div>
        <div className={styles.sidebar__block}>
          <div className={styles.sidebar__list}>
            <div
              className={`${styles.sidebar__item} ${styles.skeleton} `}
              style={{ height: '150px', width: '250px' }}
            ></div>
            <div
              className={`${styles.sidebar__item} ${styles.skeleton} `}
              style={{ height: '150px', width: '250px' }}
            ></div>
            <div
              className={`${styles.sidebar__item} ${styles.skeleton} `}
              style={{ height: '150px', width: '250px' }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
        <div className={styles.sidebar__avatar}></div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src="img/playlist01.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src="img/playlist02.png"
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src="img/playlist03.png"
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
