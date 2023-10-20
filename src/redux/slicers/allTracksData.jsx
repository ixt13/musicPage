import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isLikedTrack: false,
  mainPageTracks: [],
  favPageTracks: [],
  selectedTrackData: [],
  compilationTracks1: [],
  compilationTracks2: [],
  compilationTracks3: [],
  selectedPage: 'main',
  renderFavTracksData: [],
  renderMainPageTracksData: [],
  renderCompilationTracks1: [],
  renderCompilationTracks2: [],
  renderCompilationTracks3: [],
}
const allTrackSlicer = createSlice({
  name: 'allTracks',
  initialState,
  reducers: {
    setIsliked: (state, action) => {
      if (state.mainPageTracks.length) {
        const selectedTrack = state.mainPageTracks.find(
          (el) => el.track_file === action.payload
        )

        const userLogin = localStorage.getItem('login')
        const liked =
          selectedTrack.stared_user &&
          selectedTrack.stared_user.some(
            (favTrack) => favTrack.email === userLogin
          )

        return { ...state, isLikedTrack: liked }
      }
    },
    setRenderMainPageTracks: (state, action) => {
      return { ...state, renderMainPageTracksData: action.payload }
    },
    setCompilationTracks: (state, action) => {
      const { page, data } = action.payload
      return {
        ...state,
        [page === 'compilation1'
          ? 'compilationTracks1'
          : page === 'compilation2'
          ? 'compilationTracks2'
          : 'compilationTracks3']: data,
      }
    },
    setRenderCompilationTracks1: (state, action) => {
      return { ...state, renderCompilationTracks1: action.payload }
    },
    setRenderCompilationTracks2: (state, action) => {
      return { ...state, renderCompilationTracks2: action.payload }
    },
    setRenderCompilationTracks3: (state, action) => {
      return { ...state, renderCompilationTracks3: action.payload }
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
      }
      if (state.selectedPage === 'myTracks') {
        playlist = state.favPageTracks
      }
      if (state.selectedPage === 'compilation1') {
        playlist = state.compilationTracks1
      }
      if (state.selectedPage === 'compilation2') {
        playlist = state.compilationTracks2
      }
      if (state.selectedPage === 'compilation3') {
        playlist = state.compilationTracks3
      }

      const indexState = playlist.findIndex(
        (el) => el.track_file === state.selectedTrackData.track_file
      )

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
      }
      if (state.selectedPage === 'myTracks') {
        playlist = state.favPageTracks
      }
      if (state.selectedPage === 'compilation1') {
        playlist = state.compilationTracks1
      }
      if (state.selectedPage === 'compilation2') {
        playlist = state.compilationTracks2
      }
      if (state.selectedPage === 'compilation3') {
        playlist = state.compilationTracks3
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
  setCompilationTracks,
  setRenderCompilationTracks1,
  setRenderCompilationTracks2,
  setRenderCompilationTracks3,
  setIsliked,
} = allTrackSlicer.actions
export default allTrackSlicer.reducer
