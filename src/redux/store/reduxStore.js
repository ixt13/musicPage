import { configureStore } from '@reduxjs/toolkit'

import userDataInfoSlice from '../slicers/userLogData'
import setBarSlicer from '../slicers/showBar'
import allTracksSlicer from '../slicers/allTracksData'
const store = configureStore({
  reducer: {
    userData: userDataInfoSlice,
    isBar: setBarSlicer,
    allTracks: allTracksSlicer,
  },
})

export default store
