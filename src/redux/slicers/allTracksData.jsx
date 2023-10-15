import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mainPageTracks: [],
  favPageTracks: [],
  selectedTrackData: [],
  selectedPage: 'main',
  renderFavTracksData: [],
  renderMainPageTracksData: [],
}
const allTrackSlicer = createSlice({
  name: 'allTracks',
  initialState,
  reducers: {
    setRenderMainPageTracks: (state, action) => {
      return { ...state, renderMainPageTracksData: action.payload }
    },
    setRenderFavTracksData: (state, action) => {
      return { ...state, renderFavTracksData: action.payload }
    },
    setMainPageTracks: (state, action) => {
      return { ...state, mainPageTracks: action.payload }
    },
    setFavPageTracks: (state, action) => {
      return { ...state, favPageTracks: action.payload }
    },
    setSelectedTrackData: (state, action) => {
      const selectedTrack = state.mainPageTracks.find(
        (el) => el.track_file === action.payload
      )

      return { ...state, selectedTrackData: selectedTrack }
    },
    setnextTrack: (state, action) => {
      let playlist = ''
      if (state.selectedPage === 'main') {
        playlist = state.mainPageTracks
      } else {
        playlist = state.favPageTracks
      }

      const indexState = playlist.findIndex(
        (el) => el.track_file === state.selectedTrackData.track_file
      )
      console.log(action.payload)
      // Если флаг shuffle установлен, перемешиваем треки
      if (action.payload === true) {
        const shuffledPlaylist = [...playlist]
        for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[shuffledPlaylist[i], shuffledPlaylist[j]] = [
            shuffledPlaylist[j],
            shuffledPlaylist[i],
          ]
        }
        return { ...state, selectedTrackData: shuffledPlaylist[0] }
      }

      const indexedTrackElement = playlist[indexState + 1]
      if (indexedTrackElement) {
        return { ...state, selectedTrackData: indexedTrackElement }
      }
    },
    setPrevTrack: (state) => {
      let playlist = ''
      if (state.selectedPage === 'main') {
        playlist = state.mainPageTracks
      } else {
        playlist = state.favPageTracks
      }
      const indexState = playlist.findIndex(
        (el) => el.track_file === state.selectedTrackData.track_file
      )
      const indexedTrackElement = playlist[indexState - 1]
      if (indexedTrackElement) {
        return { ...state, selectedTrackData: indexedTrackElement }
      }
    },
    setSelectedPage: (state, action) => {
      return {
        ...state,
        selectedPage: action.payload,
      }
    },

    setAuthorFilter: (state, action) => {
      return {
        ...state,
        [state.selectedPage === 'main' ? 'mainPageTracks' : 'favPageTracks']:
          state.selectedPage === 'main'
            ? state.mainPageTracks.filter((el) => el.author === action.payload)
            : state.favPageTracks.filter((el) => el.author === action.payload),
      }
    },
  },
})

export const {
  setMainPageTracks,
  setFavPageTracks,
  setSelectedTrackData,
  setnextTrack,
  setPrevTrack,
  setSelectedPage,
  setAuthorFilter,
  setRenderMainPageTracks,
  setRenderFavTracksData,
} = allTrackSlicer.actions
export default allTrackSlicer.reducer
