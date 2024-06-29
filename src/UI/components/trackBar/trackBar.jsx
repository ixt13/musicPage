import styles from './trackBar.module.scss'
// import iconPause from '../../../assets/icon/pause.svg'
// import iconPlay from '../../../assets/icon/play.svg'
// import iconRepeat from '../../../assets/icon/repeat.svg'
// import isRepeatActiveIcon from '../../../assets/icon/Group 18545.svg'

import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  setIsPlaiyng,
  setNextTrack,
} from '../../../redux/slicers/musicProcesses'
import { Controls } from './controls/controls'
import { ProgressBar } from './progressBar/progressBar'
import { TrackInfo } from './trackInfo/trackInfo'
import { VolumeBlock } from './volume/volume'

function TrackBar(props) {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const isVisible = useSelector((state) => state.music.trackBarIsVisible)
  const audioRef = useRef(null)
  const isRepeat = useSelector((state) => state.music.isRepeat)
  const trackUrl = useSelector((state) => state.music.currentTrackUrl)
  const isPlay = useSelector((state) => state.music.isPlaiyng)
  const [playNowTrackURL, setPlayNowTrackURL] = useState(null)
  const [volumeValue, setVolumeValue] = useState(0.5)

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current
        .play()

        .catch((err) => {
          console.log('Error playing audio:', err)
        })
    }
  }

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }
  useEffect(() => {
    if (isPlay === false) {
      pauseSong()
    }
  }, [isPlay])
  //////////////---  playlistItemClick trigger the play
  useEffect(() => {
    setPlayNowTrackURL(trackUrl)
    audioRef.current.load()
  }, [trackUrl])
  ///////////////
  const endFn = () => {
    if (isRepeat) {
      dispatch(setNextTrack())
    } else {
      audioRef.currentTime = 0
      playSong()
    }
  }

  useEffect(() => {
    audioRef.current.volume = volumeValue
  }, [volumeValue])
  return (
    <div
      className={`${styles.bar} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <audio
        ref={audioRef}
        src={playNowTrackURL}
        onLoadedData={(e) => {
          playSong()
        }}
        onPlay={() => {
          dispatch(setIsPlaiyng(true))
        }}
        onPause={() => {
          dispatch(setIsPlaiyng(false))
        }}
        onEnded={endFn}
      />
      <div className={`${styles.bar__content} ${styles.dark}`}>
        <ProgressBar />
        <div className={`${styles.bar__player_block} ${styles.dark}`}>
          <div className={styles.bar__player}>
            <Controls pause={pauseSong} play={playSong} />
            <TrackInfo />
          </div>
          <VolumeBlock
            setVolumeValue={setVolumeValue}
            volumeValue={volumeValue}
          />
        </div>
      </div>
    </div>
  )
}

export default TrackBar
