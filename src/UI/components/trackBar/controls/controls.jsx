import { ReactComponent as PlayIcon } from '../../../../assets/icons/play.svg'
import styles from './controls.module.scss'

import { ReactComponent as NextIcon } from '../../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../../assets/icons/prev.svg'

import { ReactComponent as RepeatIcon } from '../../../../assets/icons/repeat.svg'

import { ReactComponent as PauseIcon } from '../../../../assets/icons/pause.svg'
import { ReactComponent as ShuffleIcon } from '../../../../assets/icons/shuffle.svg'
export const Controls = ({
  isPlaying,
  play,
  pause,
  data,
  changeTrack,
  currentTrack,
}) => {
  return (
    <>
      <div className={styles.mainControls}>
        <PrevIcon
          onClick={() => {
            changeTrack('prev', currentTrack, data)
          }}
        />
        {isPlaying ? (
          <PauseIcon onClick={pause} />
        ) : (
          <PlayIcon onClick={play} />
        )}

        <NextIcon
          onClick={() => {
            changeTrack('next', currentTrack, data)
          }}
        />
      </div>

      <div className={styles.coursControls}>
        <RepeatIcon />
        <ShuffleIcon />
      </div>
    </>
  )
}
