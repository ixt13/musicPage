import styles from './bar.module.css'
import iconPause from '../../../../assets/icon/pause.svg'
import iconPrev from '../../../../assets/icon/prev.svg'
import iconPlay from '../../../../assets/icon/play.svg'
import iconNext from '../../../../assets/icon/next.svg'
import iconRepeat from '../../../../assets/icon/repeat.svg'
import iconShuffle from '../../../../assets/icon/shuffle.svg'
import icnonShuffleActive from '../../../../assets/icon/Group 18546.svg'
import iconNote from '../../../../assets/icon/trackDarkIcon.svg'
import iconLike from '../../../../assets/icon/like.svg'
import volumeIconLight from '../../../../assets/icon/volumeLight.svg'
import iconDislike from '../../../../assets/icon/Vector 15.png'
import iconVolume from '../../../../assets/icon/volume.svg'
import trackIconLight from '../../../../assets/icon/lightTrackIcon.svg'
import isRepeatActiveIcon from '../../../../assets/icon/Group 18545.svg'
import { useState } from 'react'
import { setIsliked } from '../../../../redux/slicers/allTracksData'
import {
  setnextTrack,
  setPrevTrack,
} from '../../../../redux/slicers/allTracksData'
import { useMemo } from 'react'
import { useContext } from 'react'
import { useEffect, useRef } from 'react'
import { ThemeContext } from '../../ThemeProvider/ThemeProvider'
import { useSelector, useDispatch } from 'react-redux'
import {
  setShuffled,
  setPlaying,
  setProgress,
  setMaxDuration,
  setAudioVolume,
  setBufferedProgress,
  setRepeat,
} from '../../../../redux/slicers/showBarSlicer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
function Bar(props) {
  const isShowBar = useSelector((state) => state.bar.showBar)
  const shuffled = useSelector((state) => state.bar.isShuffled)
  const plaiyng = useSelector((state) => state.bar.isPlaying)
  const progressBar = useSelector((state) => state.bar.progress)
  const maxDurationValue = useSelector((state) => state.bar.maxDuration)
  const volume = useSelector((state) => state.bar.audioVolume)
  const bufferedProgressValue = useSelector(
    (state) => state.bar.bufferedProgress
  )
  const isRepeat = useSelector((state) => state.bar.repeat)
  const navigate = useNavigate()
  const memoShuffled = useMemo(() => shuffled, [shuffled])
  const memoPlaying = useMemo(() => plaiyng, [plaiyng])
  const memoProgressBar = useMemo(() => progressBar, [progressBar])
  const memoMaxDuration = useMemo(() => maxDurationValue, [maxDurationValue])
  const memoVolume = useMemo(() => volume, [volume])
  const memoBufferedProgress = useMemo(
    () => bufferedProgressValue,
    [bufferedProgressValue]
  )
  const isLiked = useSelector((state) => state.allTracks.isLikedTrack)

  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  const selectedTrackInfo = useSelector(
    (state) => state.allTracks.selectedTrackData
  )
  const mainData = useSelector((state) => state.allTracks.mainPageTracks)
  const favData = useSelector((state) => state.allTracks.favPageTracks)
  const compilTracks1 = useSelector(
    (state) => state.allTracks.compilationTracks1
  )
  const compilTracks2 = useSelector(
    (state) => state.allTracks.compilationTracks2
  )
  const compilTracks3 = useSelector(
    (state) => state.allTracks.compilationTracks3
  )
  const audioRef = useRef(null)

  function handleVolumeChange(value) {
    dispatch(setAudioVolume(value / 100))
    audioRef.current.volume = memoVolume
    if (value / 100 === 0) {
      audioRef.current.volume = null
    }
  }
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
          dispatch(setPlaying(true))
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
    dispatch(setProgress(progressPercent))
  }

  const handleLoadedMetadata = () => {
    const duration = audioRef.current.duration
    dispatch(setProgress(0))
    dispatch(setMaxDuration(duration))
  }
  const handleProgress = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current
      if (audioElement.buffered.length > 0) {
        const bufferedEnd = audioElement.buffered.end(0)
        const duration = audioElement.duration
        const bufferedProgress = (bufferedEnd / duration) * 100
        dispatch(setBufferedProgress(bufferedProgress))
      }
    }
  }

  const accessToken = localStorage.getItem('token')
  const userPassword = localStorage.getItem('password')
  const userLogin = localStorage.getItem('login')

  const data = {
    email: userLogin,
    password: userPassword,
  }
  function handleToggleLike(method) {
    const requestOptions = {
      url: `https://skypro-music-api.skyeng.tech/catalog/track/${selectedTrackInfo.id}/favorite/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    if (method === 'post') {
      requestOptions.method = 'post'
      requestOptions.data = data
    } else if (method === 'delete') {
      requestOptions.method = 'delete'
    }
    function getFromStringCompilationId(string) {
      return string.slice(-1)
    }

    axios(requestOptions)
      .then((response) => {
        props.updateMainTracks()
        props.updateFavTracks()
        if (mainData.length) {
          setTimeout(() => {
            dispatch(setIsliked(selectedTrackInfo.track_file))
          }, 700)
        }

        if (
          props.selectedPage !== 'main' &&
          props.selectedPage !== 'myTracks'
        ) {
          props.updateCompilationTracks(
            getFromStringCompilationId(props.selectedPage)
          )
        }
      })
      .catch((error) => {
        console.log(error)
        navigate('/login')
        localStorage.removeItem('username')
      })
  }

  useEffect(() => {
    handleStop()
    handleStart()
  }, [selectedTrackInfo.track_file])

  useEffect(() => {
    dispatch(setIsliked(selectedTrackInfo.track_file))
  }, [selectedTrackInfo.track_file])

  if (!isShowBar) {
    return <div></div>
  } else
    return (
      <div className={styles.bar}>
        <audio
          ref={audioRef}
          src={selectedTrackInfo ? selectedTrackInfo.track_file : ''}
          onPlay={() => dispatch(setPlaying(true))}
          onPause={() => dispatch(setPlaying(false))}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onProgress={handleProgress}
          onEnded={() => {
            dispatch(setnextTrack(memoShuffled))
          }}
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
                    ? {
                        width: `${memoProgressBar}%`,
                        backgroundColor: '#d9d9d9',
                      }
                    : { width: `${memoProgressBar}%`, backgroundColor: 'gray' }
                }
                className={styles.barProgress}
                value={memoProgressBar}
                max={memoMaxDuration}
              />
              <div
                style={
                  theme === 'dark'
                    ? {
                        width: `${memoBufferedProgress}%`,
                        backgroundColor: 'gray',
                      }
                    : {
                        width: `${memoBufferedProgress}%`,
                        backgroundColor: '#d9d9d9',
                      }
                }
                className={styles.bufferedProgressBar}
                value={memoBufferedProgress}
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
                  onClick={memoPlaying ? handleStop : handleStart}
                >
                  <img
                    className={styles.player__btn_play_svg}
                    src={memoPlaying ? iconPause : iconPlay}
                    alt="play"
                  />
                </div>
                <div className={`${styles.player__btn_next} ${styles._btn}`}>
                  <img
                    onClick={() => {
                      dispatch(setnextTrack(memoShuffled))
                    }}
                    className={styles.player__btn_next_svg}
                    src={iconNext}
                    alt="next"
                  />
                </div>
                <div
                  onClick={() => {
                    dispatch(setRepeat(!isRepeat))
                    if (memoShuffled) {
                      dispatch(setShuffled(!memoShuffled))
                    }
                  }}
                  className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
                >
                  <img
                    className={styles.player__btn_repeat_svg}
                    src={isRepeat ? isRepeatActiveIcon : iconRepeat}
                    alt="repeat"
                  />
                </div>
                <div
                  onClick={() => {
                    dispatch(setShuffled(!memoShuffled))
                    if (isRepeat) {
                      dispatch(setRepeat(!isRepeat))
                    }
                  }}
                  className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}
                >
                  <img
                    className={styles.player__btn_shuffle_svg}
                    src={memoShuffled ? icnonShuffleActive : iconShuffle}
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
                    onClick={() => {
                      handleToggleLike(isLiked ? 'delete' : 'post')
                    }}
                    className={`${styles.track_play__like} ${styles._btn_icon}`}
                  >
                    <img
                      className={styles.track_play__like_svg}
                      src={isLiked ? iconDislike : iconLike}
                      alt="like"
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
                    onChange={(e) => {
                      handleVolumeChange(e.target.value)
                    }}
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
