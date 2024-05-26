import { useContext } from 'react'
import { ThemeContext } from '../../../../contextProviders/ThemeProvider'
import styles from './progressBar.module.scss'

export const ProgressBar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${styles.bar__player_progress} ${
        theme === 'dark'
          ? styles.bar__player_progress_dark
          : styles.bar__player_progress_light
      }`}
    >
      <div className={`${styles.bar__player_progress} ${styles[theme]}`}>
        <div />
        <div />
      </div>
    </div>
  )
}
