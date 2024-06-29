import styles from './filterSelectBox.module.scss'

function FilterSelectBox({ hideOnBlurHandle }) {
  return (
    <div
      onMouseLeave={() => {
        hideOnBlurHandle(0)
      }}
      className={`${styles.filterContainer} ${styles.dark}   `}
    >
      <div className={styles.container}>
        <div className={styles.list}></div>
      </div>
    </div>
  )
}

export default FilterSelectBox
