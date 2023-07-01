import styles from './navMenu.module.css'

function NavMenu() {
  function showHide() {
    const burgerMenu = document.getElementById('burger')
    burgerMenu.classList.toggle(styles.nav__menu)
  }

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
        <img className={styles.logo__image} src="img/logo.png" alt="logo" />
      </div>
      <div
        className={`${styles.nav__burger}  ${styles._btn}`}
        onClick={showHide}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      <div id="burger" className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="#" className={styles._btn_text}>
              Главная
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles._btn_text}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles._btn_text}>
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavMenu
