import styles from './bar.module.css'
import iconPause from '../../../../assets/icon/pause.svg'
import iconPrev from '../../../../assets/icon/prev.svg'
import iconPlay from '../../../../assets/icon/play.svg'
import iconNext from '../../../../assets/icon/next.svg'
import iconRepeat from '../../../../assets/icon/repeat.svg'
import iconShuffle from '../../../../assets/icon/shuffle.svg'
import iconNote from '../../../../assets/icon/trackDarkIcon.svg'
import iconLike from '../../../../assets/icon/like.svg'
import volumeIconLight from '../../../../assets/icon/volumeLight.svg'
import iconDislike from '../../../../assets/icon/dislike.svg'
import iconVolume from '../../../../assets/icon/volume.svg'
import trackIconLight from '../../../../assets/icon/lightTrackIcon.svg'
import track from '../../../../assets/Bobby_Marleni_-_Dropin.mp3'
import { useContext } from 'react'
import { useEffect, useState, useRef } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'

function Bar() {
  const { theme } = useContext(ThemeContext)
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [isPlaying, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const handleStop = () => {
    audioRef.current.pause()
  }

  const handleStart = () => {
    audioRef.current.play()
  }

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration
    const progressPercent = (currentTime / duration) * 100
    setProgress(progressPercent)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (showSkeleton) {
    return (
      <div className={styles.bar}>
        <div className={`${styles.bar__content} ${styles[theme]}`}>
          <div
            className={`${styles.bar__player_progress} ${
              theme === 'dark'
                ? styles.bar__player_progress_dark
                : styles.bar__player_progress_light
            }`}
          ></div>
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
                  <div
                    className={`${styles.track_play__image} ${styles.skeleton} `}
                    style={{ height: '51px', width: '51px' }}
                  ></div>
                  <div
                    className={`${styles.track_play__author} ${styles.skeleton}`}
                    style={{ height: '16px', width: '60px' }}
                  ></div>
                  <div
                    className={`${styles.track_play__album} ${styles.skeleton}`}
                    style={{ height: '16px', width: '60px' }}
                  ></div>
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

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={track}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className={`${styles.bar__content} ${styles[theme]}`}>
        <div
          className={`${styles.bar__player_progress} ${
            theme === 'dark'
              ? styles.bar__player_progress_dark
              : styles.bar__player_progress_light
          }`}
        >
          <div
            className={`${styles.barProgress} `}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={`${styles.bar__player_block} ${styles[theme]}`}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={`${styles.player__btn_prev} ${styles._btn}`}>
                <img
                  className={styles.player__btn_prev_svg}
                  src={iconPrev}
                  alt="prev"
                />
              </div>
              <div
                className={`${styles.player__btn_play} ${styles._btn}`}
                onClick={isPlaying ? handleStop : handleStart}
              >
                <img
                  className={styles.player__btn_play_svg}
                  src={isPlaying ? iconPause : iconPlay}
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
                    src={theme === 'dark' ? iconNote : trackIconLight}
                    alt="note"
                  />
                </div>
                <div className={styles.track_play__author}>
                  <a
                    className={`${styles.track_play__author_link} ${styles[theme]}`}
                    href="#"
                  >
                    xxxx
                  </a>
                </div>
                <div className={styles.track_play__album}>
                  <a
                    className={`${styles.track_play__album_link} ${styles[theme]}`}
                    href="#"
                  >
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
                <img
                  className={styles.volume__svg}
                  src={theme === 'dark' ? iconVolume : volumeIconLight}
                  alt="volumeIcon"
                />
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

export default Bar
