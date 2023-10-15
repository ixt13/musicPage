import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  showBar: false,
  isShuffled: false,
  repeat: true,
  isPlaying: false,
  progress: 0,
  maxDuration: 0,
  audioVolume: 0.5,
  bufferedProgress: 0,
}
const showBarSlicer = createSlice({
  name: 'bar',
  initialState,
  reducers: {
    setRepeat: (state, action) => {
      return { ...state, repeat: action.payload }
    },
    setShowBar: (state, action) => {
      return { ...state, showBar: action.payload }
    },
    setShuffled: (state, action) => {
      return {
        ...state,
        isShuffled: action.payload,
      }
    },
    setPlaying: (state, action) => {
      return {
        ...state,
        isPlaying: action.payload,
      }
    },
    setProgress: (state, action) => {
      return {
        ...state,
        progress: action.payload,
      }
    },
    setMaxDuration: (state, action) => {
      return {
        ...state,
        maxDuration: action.payload,
      }
    },
    setAudioVolume: (state, action) => {
      return {
        ...state,
        audioVolume: action.payload,
      }
    },
    setBufferedProgress: (state, action) => {
      return {
        ...state,
        bufferedProgress: action.payload,
      }
    },
  },
})

export const {
  setShowBar,
  setPlaying,
  setProgress,
  setMaxDuration,
  setAudioVolume,
  setShuffled,
  setBufferedProgress,
  setRepeat,
} = showBarSlicer.actions
export default showBarSlicer.reducer
