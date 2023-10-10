import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  userInfo: [],
}
const userDataInfoSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return {
        ...state,
        userInfo: action.payload,
      }
    },
  },
})

export const { setUserData } = userDataInfoSlice.actions
export default userDataInfoSlice.reducer
