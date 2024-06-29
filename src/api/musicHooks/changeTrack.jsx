import { useLocation } from 'react-router-dom'

export const getNextTrack = (
  nextBackEvent,
  currentTrackURL,
  data,
  callback
) => {
  const handleSetTrackIndex = (dataTracks, trackUrl) => {
    const index = dataTracks.findIndex((elem) => elem.track_file === trackUrl)

    if (index !== -1) {
      return index
    } else {
      return undefined
    }
  }

  const index = handleSetTrackIndex(data, currentTrackURL)

  if (
    (index !== undefined && index !== data.length - 1) ||
    (index === data.length - 1 && nextBackEvent === 'prev')
  ) {
    if (nextBackEvent === 'prev' && index === 0) {
      return
    }
    const nextTrack =
      data[nextBackEvent === 'next' ? index + 1 : index - 1].track_file

    if (nextTrack !== undefined) {
      const nextTrackData =
        data[nextBackEvent === 'next' ? index + 1 : index - 1]
      callback(nextTrack, nextTrackData)
    } else return
  }
}

export const getCurrentUrlAllData = (tracksData, trackUrl) => {
  const trackData = tracksData.find((elem) => elem.track_file === trackUrl)
  return trackData
}

export const checkIfLiked = (users, user) => {
  const location = useLocation().pathname

  if (location === '/myTracks') {
    return
  }
  return users.find((el) => el.id === Number(user))
}
