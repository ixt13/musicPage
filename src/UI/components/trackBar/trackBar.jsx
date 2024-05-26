import styles from './trackBar.module.scss'
// import iconPause from '../../../assets/icon/pause.svg'
// import iconPlay from '../../../assets/icon/play.svg'
// import iconRepeat from '../../../assets/icon/repeat.svg'
// import isRepeatActiveIcon from '../../../assets/icon/Group 18545.svg'

import { useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect, useRef, useState } from 'react'
import { getNextTrack } from '../../../api/musicHooks/changeTrack'
import { ThemeContext } from '../../../contextProviders/ThemeProvider'
import { TracksContext } from '../../../contextProviders/trackBarProvider'
import { Controls } from './controls/controls'
import { ProgressBar } from './progressBar/progressBar'
import { TrackInfo } from './trackInfo/trackInfo'
import { VolumeBlock } from './volume/volume'

function TrackBar(props) {
  const { theme } = useContext(ThemeContext)

  console.log('render')
  const queryClient = useQueryClient()

  const { currentTrackURL, setCurrentTrackURL } = useContext(TracksContext)

  const mainPageTracks = queryClient.getQueryData(['allTracks'])

  const favPageTracks = queryClient.getQueryData(['favTracks'])

  const tracksData = mainPageTracks
  // location === '/' && mainPageTracks !== undefined
  //   ? mainPageTracks
  //   : location === '/myTracks' && favPageTracks !== undefined
  //   ? favPageTracks
  //   : []

  const audioRef = useRef(null)

  const [playNowTrackURL, setPlayNowTrackURL] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          console.log('play')
        })
        .catch((err) => {
          console.log('Error playing audio:', err)
        })
    }
  }

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    setIsPlaying(false)
    console.log('pause')
  }

  const click = (nextBackEvent, currentTrackURL, data) => {
    getNextTrack(nextBackEvent, currentTrackURL, data, (nextTrack) => {
      if (nextTrack) {
        setCurrentTrackURL(nextTrack)
        setPlayNowTrackURL(nextTrack)
      }
    })
  }

  useEffect(() => {
    if (currentTrackURL && currentTrackURL !== playNowTrackURL) {
      setPlayNowTrackURL(currentTrackURL)

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.load()
      }
    }
  }, [currentTrackURL])

  return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={playNowTrackURL}
        onLoadedData={(e) => {
          playSong()
        }}
      />
      <div className={`${styles.bar__content} ${styles[theme]}`}>
        <ProgressBar />
        <div className={`${styles.bar__player_block} ${styles[theme]}`}>
          <div className={styles.bar__player}>
            <Controls
              play={playSong}
              pause={pauseSong}
              changeTrack={click}
              data={tracksData}
              isPlaying={isPlaying}
              currentTrack={currentTrackURL}
            />
            <TrackInfo />
          </div>
          <VolumeBlock />
        </div>
      </div>
    </div>
  )
}

export default TrackBar
