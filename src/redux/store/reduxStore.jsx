import { configureStore } from '@reduxjs/toolkit'

import musicDataSlice from '../slicers/musicProcesses.jsx'
const store = configureStore({
  reducer: {
    music: musicDataSlice,
  },
})
export default store
