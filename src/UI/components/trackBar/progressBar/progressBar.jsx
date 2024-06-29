import styles from './progressBar.module.scss'

export const ProgressBar = () => {
  return (
    <div
      className={`${styles.bar__player_progress} ${styles.bar__player_progress_dark}`}
    >
      <div className={`${styles.bar__player_progress} ${styles.dark}`}>
        <div />
        <div />
      </div>
    </div>
  )
}
