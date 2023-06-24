import styles from './year.module.css'
function FilterYear() {
  return (
    <div className={styles.filter}>
      <div className={styles.input_box}>
        <label className={styles.input}>
          <input className={styles.radio} name="year" type="radio" />
          Более новые
        </label>
        <label className={styles.input}>
          <input className={styles.radio} name="year" type="radio" />
          Более старые
        </label>
      </div>
    </div>
  )
}
export default FilterYear
