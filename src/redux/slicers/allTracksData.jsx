import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mainPageTracks: [],
  favPageTracks: [],
  selectedTrackData: [],
  selectedPage: '',
}
const allTrackSlicer = createSlice({
  name: 'allTracks',
  initialState,
  reducers: {
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
    setnextTrack: (state) => {
      let playlist = ''
      if (state.selectedPage === 'main') {
        playlist = state.mainPageTracks
      } else {
        playlist = state.favPageTracks
      }
      const indexState = playlist.findIndex(
        (el) => el.track_file === state.selectedTrackData.track_file
      )
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
} = allTrackSlicer.actions
export default allTrackSlicer.reducer
