import styles from './bar.module.css'
import iconPrev from './prev.svg'
import iconPlay from './play.svg'
import iconNext from './next.svg'
import iconRepeat from './repeat.svg'
import iconShuffle from './shuffle.svg'
import iconNote from './note.svg'
import iconLike from './like.svg'
import iconDislike from './dislike.svg'
import iconVolume from './volume.svg'
function bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress}></div>
        <div className={styles.bar__player_block}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={`${styles.player__btn_prev} ${styles._btn}`}>
                <img
                  className={styles.player__btn_prev_svg}
                  src={iconPrev}
                  alt="prev"
                />
              </div>
              <div className={`${styles.player__btn_play} ${styles._btn}`}>
                <img
                  className={styles.player__btn_play_svg}
                  src={iconPlay}
                  alt="play"
                />
              </div>
              <div className={`${styles.player__btn_next} ${styles._btn}`}>
                <img
                  className={styles.player__btn_next_svg}
                  src={iconNext}
                  alt="next"
                />
              </div>
              <div
                className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
              >
                <img
                  className={styles.player__btn_repeat_svg}
                  src={iconRepeat}
                  alt="repeat"
                />
              </div>
              <div
                className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
              >
                <img
                  className={styles.player__btn_shuffle_svg}
                  src={iconShuffle}
                  alt="Shuffle"
                />
              </div>
            </div>
            <div className={styles.player__track_play}>
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <img
                    className={styles.track_play__svg}
                    src={iconNote}
                    alt="note"
                  />
                </div>
                <div className={styles.track_play__author}>
                  <a className={styles.track_play__author_link} href="#">
                    xxxx
                  </a>
                </div>
                <div className={styles.track_play__album}>
                  <a className={styles.track_play__album_link} href="#">
                    xxxxx
                  </a>
                </div>
              </div>
              <div className={styles.track_play__like_dis}>
                <div
                  className={`${styles.track_play__like} ${styles._btn_icon}`}
                >
                  <img
                    className={styles.track_play__like_svg}
                    src={iconLike}
                    alt="like"
                  />
                </div>
                <div
                  className={`${styles.track_play__dislike} ${styles._btn_icon}`}
                >
                  <img
                    className={styles.track_play__dislike_svg}
                    src={iconDislike}
                    alt="dislike"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bar__volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <img className={styles.volume__svg} src={iconVolume} alt="" />
              </div>
              <div className={`${styles.volume__progress} ${styles._btn}`}>
                <input
                  className={`${styles.volume__progress_line} ${styles._btn}`}
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bar
