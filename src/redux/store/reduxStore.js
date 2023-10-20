import { configureStore } from '@reduxjs/toolkit'

import userDataInfoSlice from '../slicers/userLogData'
import barSlicer from '../slicers/showBarSlicer'
import allTracksSlicer from '../slicers/allTracksData'
const store = configureStore({
  reducer: {
    userData: userDataInfoSlice,
    bar: barSlicer,
    allTracks: allTracksSlicer,
  },
})

export default store
