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
import {
  setnextTrack,
  setPrevTrack,
} from '../../../../redux/slicers/allTracksData'

import { useContext } from 'react'
import { useEffect, useState, useRef } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'
import { useSelector, useDispatch } from 'react-redux'
import { memo } from 'react'
function Bar() {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  const selectedTrackInfo = useSelector(
    (state) => state.allTracks.selectedTrackData
  )

  const [isPlaying, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [maxDuration, setMaxDuration] = useState(0)

  const audioRef = useRef(null)

  const [bufferedProgress, setBufferedProgress] = useState(0)

  function handleStop() {
    if (audioRef.current !== null) {
      audioRef.current.pause()
    }
  }

  function handleStart() {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          // Воспроизведение успешно начато
          setPlaying(true)
        })
        .catch((error) => {
          console.error('Ошибка при воспроизведении:', error)
        })
    }
  }

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration
    const progressPercent = (currentTime / duration) * 100
    setProgress(progressPercent)
  }

  const handleLoadedMetadata = () => {
    const duration = audioRef.current.duration
    setProgress(0)
    setMaxDuration(duration)
  }
  const handleProgress = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current
      if (audioElement.buffered.length > 0) {
        const bufferedEnd = audioElement.buffered.end(0)
        const duration = audioElement.duration
        const bufferedProgress = (bufferedEnd / duration) * 100
        setBufferedProgress(bufferedProgress)
      }
    }
  }

  useEffect(() => {
    handleStop()
    handleStart()
  }, [selectedTrackInfo.track_file])
  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={selectedTrackInfo ? selectedTrackInfo.track_file : ''}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onProgress={handleProgress}
      />
      <div className={`${styles.bar__content} ${styles[theme]}`}>
        <div
          className={`${styles.bar__player_progress} ${
            theme === 'dark'
              ? styles.bar__player_progress_dark
              : styles.bar__player_progress_light
          }`}
        >
          <div className={`${styles.bar__player_progress} ${styles[theme]}`}>
            <div
              style={
                theme === 'dark'
                  ? { width: `${progress}%`, backgroundColor: '#d9d9d9' }
                  : { width: `${progress}%`, backgroundColor: 'gray' }
              }
              className={styles.barProgress}
              value={progress}
              max={maxDuration}
            />
            <div
              style={
                theme === 'dark'
                  ? {
                      width: `${bufferedProgress}%`,
                      backgroundColor: 'gray',
                    }
                  : {
                      width: `${bufferedProgress}%`,
                      backgroundColor: '#d9d9d9',
                    }
              }
              className={styles.bufferedProgressBar}
              value={bufferedProgress}
              max={100}
            />
          </div>
        </div>
        <div className={`${styles.bar__player_block} ${styles[theme]}`}>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={`${styles.player__btn_prev} ${styles._btn}`}>
                <img
                  onClick={() => {
                    dispatch(setPrevTrack('prev'))
                  }}
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
                  onClick={() => {
                    dispatch(setnextTrack('next'))
                  }}
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
                  {selectedTrackInfo ? selectedTrackInfo.author : ''}
                  <div
                    className={`${styles.track_play__author_link} ${styles[theme]}`}
                  >
                    {}
                  </div>
                </div>
                <div className={styles.track_play__album}>
                  {selectedTrackInfo ? selectedTrackInfo.album : ''}
                  <div
                    className={`${styles.track_play__album_link} ${styles[theme]}`}
                  ></div>
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

export default memo(Bar)
