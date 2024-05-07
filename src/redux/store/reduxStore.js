import { configureStore } from '@reduxjs/toolkit'

import userDataInfoSlice from '../slicers/userLogData'

const store = configureStore({
  reducer: {
    userData: userDataInfoSlice,
  },
})

export default store
