import { ReactComponent as PlayIcon } from '../../../../assets/icons/play.svg'
import styles from './controls.module.scss'

import { ReactComponent as NextIcon } from '../../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../../assets/icons/prev.svg'

import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as PauseIcon } from '../../../../assets/icons/pause.svg'
import { ReactComponent as ShuffleIcon } from '../../../../assets/icons/shuffle.svg'
import {
  setIsRepeat,
  setNextTrack,
  setPrevTrack,
  setRandomTrackIndex,
} from '../../../../redux/slicers/musicProcesses'
export const Controls = ({ play, pause }) => {
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRep, setIsRep] = useState(true)

  const dispatch = useDispatch()

  const isPlaiyng = useSelector((state) => state.music.isPlaiyng)

  const repeatHancleClick = () => {
    setIsRep(!isRep)
    dispatch(setIsRepeat(!isRep))
  }

  const next = () => {
    dispatch(setNextTrack())
  }

  const prev = () => {
    dispatch(setPrevTrack())
  }
  const shuffle = () => {
    if (!isShuffle) {
      dispatch(setRandomTrackIndex())
    }

    setIsShuffle(!isShuffle)
    dispatch(setRandomTrackIndex(false))
  }

  return (
    <>
      <div className={styles.mainControls}>
        <PrevIcon
          className={styles.cPointer}
          onClick={() => {
            if (isShuffle) {
              dispatch(setRandomTrackIndex())
            }

            prev()
          }}
        />
        {isPlaiyng ? (
          <PauseIcon onClick={pause} className={styles.cPointer} />
        ) : (
          <PlayIcon onClick={play} className={styles.cPointer} />
        )}

        <NextIcon
          className={styles.cPointer}
          onClick={() => {
            if (isShuffle) {
              dispatch(setRandomTrackIndex())
            }

            next()
          }}
        />
      </div>

      <div className={styles.coursControls}>
        <RepeatIcon
          className={styles.cPointer}
          onClick={() => {
            repeatHancleClick()
          }}
          stroke={isRep ? '#D9D9D9' : 'transparent'}
        />
        <ShuffleIcon
          onClick={shuffle}
          stroke={isShuffle ? '#D9D9D9' : 'transparent'}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </>
  )
}
