import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mainPlaylist: [],
  secondPlaylist: [],
  currentTrackUrl: null,
  currentTrackData: '',
  trackBarIsVisible: false,
  isPlaiyng: false,
  isLiked: false,
  currentPlaylistTarget: null,
  randomTrackIndex: false,
  isRepeat: true,
}
const loggedUserID = parseInt(localStorage.getItem('userID'))

const musicDataSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setIsLiked: (state, action) => {
      state.isLiked = action.payload
    },
    setMainPlaylist: (state, action) => {
      state.mainPlaylist = action.payload
    },
    setSecondPlaylist: (state, action) => {
      state.secondPlaylist = action.payload
    },
    setCurrentTrackUrl: (state, action) => {
      state.currentTrackUrl = action.payload
    },
    setCurrentTrackData: (state, action) => {
      state.currentTrackData = action.payload
    },
    setTrackBarIsVisible: (state, action) => {
      state.trackBarIsVisible = action.payload
      if (action.payload === false) {
        state.isPlaiyng = false
      }
    },
    setIsPlaiyng: (state, action) => {
      state.isPlaiyng = action.payload
    },
    setCurrentPlaylistTarget: (state, action) => {
      state.currentPlaylistTarget = action.payload
    },
    setNextTrack: (state, action) => {
      if (state.currentPlaylistTarget === 'main') {
        const currentTrackIndex = state.mainPlaylist.findIndex(
          (el) => el.track_file === state.currentTrackUrl
        )

        if (
          currentTrackIndex < state.mainPlaylist.length - 1 ||
          state.randomTrackIndex
        ) {
          state.currentTrackUrl =
            state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].track_file

          state.currentTrackData = {
            name: state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].name,
            author:
              state.mainPlaylist[
                state.randomTrackIndex
                  ? state.randomTrackIndex
                  : currentTrackIndex + 1
              ].author,
            id: state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].id,
          }

          const data = state.mainPlaylist[
            state.randomTrackIndex
              ? state.randomTrackIndex
              : currentTrackIndex + 1
          ].stared_user.find((el) => el.id === loggedUserID)

          if (data !== undefined) {
            state.isLiked = true
          } else state.isLiked = false
        } else return
      } else {
        state.isLiked = true
        const currentTrackIndex = state.secondPlaylist.findIndex(
          (el) => el.track_file === state.currentTrackUrl
        )
        if (
          currentTrackIndex < state.secondPlaylist.length - 1 ||
          state.randomTrackIndex
        ) {
          state.currentTrackUrl =
            state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].track_file
          state.currentTrackData = {
            name: state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].name,
            author:
              state.secondPlaylist[
                state.randomTrackIndex
                  ? state.randomTrackIndex
                  : currentTrackIndex + 1
              ].author,
            id: state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex + 1
            ].id,
          }

          /////////////
        } else return
      }
    },
    setPrevTrack: (state, action) => {
      if (state.currentPlaylistTarget === 'main') {
        const currentTrackIndex = state.mainPlaylist.findIndex(
          (el) => el.track_file === state.currentTrackUrl
        )

        if (currentTrackIndex > 0 || state.randomTrackIndex) {
          state.currentTrackUrl =
            state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].track_file

          state.currentTrackData = {
            name: state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].name,
            author:
              state.mainPlaylist[
                state.randomTrackIndex
                  ? state.randomTrackIndex
                  : currentTrackIndex - 1
              ].author,
            id: state.mainPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].id,
          }
          const data = state.mainPlaylist[
            state.randomTrackIndex
              ? state.randomTrackIndex
              : currentTrackIndex - 1
          ].stared_user.find((el) => el.id === loggedUserID)

          if (data !== undefined) {
            state.isLiked = true
          } else state.isLiked = false
        } else return
      } else {
        state.isLiked = true
        const currentTrackIndex = state.secondPlaylist.findIndex(
          (el) => el.track_file === state.currentTrackUrl
        )
        if (currentTrackIndex > 0 || state.randomTrackIndex) {
          state.currentTrackUrl =
            state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].track_file
          state.currentTrackData = {
            name: state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].name,
            author:
              state.secondPlaylist[
                state.randomTrackIndex
                  ? state.randomTrackIndex
                  : currentTrackIndex - 1
              ].author,
            id: state.secondPlaylist[
              state.randomTrackIndex
                ? state.randomTrackIndex
                : currentTrackIndex - 1
            ].id,
          }
        } else return
      }
    },
    setRandomTrackIndex: (state, action) => {
      if (action.payload === false) {
        state.randomTrackIndex = false
        return
      }
      if (state.currentPlaylistTarget === 'main') {
        state.randomTrackIndex = Math.floor(
          Math.random() * state.mainPlaylist.length
        )
      } else {
        state.randomTrackIndex = Math.floor(
          Math.random() * state.secondPlaylist.length
        )
      }
    },
    setIsRepeat: (state, action) => {
      state.isRepeat = action.payload
    },
    checkIfLiked: (state, action) => {
      // if (state.currentPlaylistTarget === 'main') {
      //   const data = state.mainPlaylist.find((item) => {
      //     if (item.track_file === state.currentTrackUrl) {
      //       return item.stared_user.find((el) => el.id === loggedUserID)
      //     }
      //     return false
      //   })
      //   if (data) {
      //     state.isLiked = true
      //   } else {
      //     state.isLiked = false
      //   }
      // } else {
      const data = state.secondPlaylist.find(
        (item) => item.track_file === state.currentTrackUrl
      )

      if (data) {
        state.isLiked = true
      } else {
        state.isLiked = false
      }
      // }
    },
  },
})

export const {
  setMainPlaylist,
  setSecondPlaylist,
  setCurrentTrackUrl,
  setCurrentTrackData,
  setTrackBarIsVisible,
  setIsPlaiyng,
  setIsLiked,
  setCurrentPlaylistTarget,
  setNextTrack,
  setPrevTrack,
  setRandomTrackIndex,
  setIsRepeat,
  checkIfLiked,
} = musicDataSlice.actions
export default musicDataSlice.reducer
