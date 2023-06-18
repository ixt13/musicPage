import styles from './navMenu.module.css'

function navMenu() {
  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div className={styles.nav__burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default navMenu
