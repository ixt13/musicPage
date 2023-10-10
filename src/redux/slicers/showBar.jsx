import { createSlice } from '@reduxjs/toolkit'

const showBarSlicer = createSlice({
  name: 'isBar',
  initialState: false,
  reducers: {
    setShowBar: (state, action) => {
      return action.payload
    },
  },
})

export const { setShowBar } = showBarSlicer.actions
export default showBarSlicer.reducer
