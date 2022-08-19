import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openQuestions: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: {
    update(state, action) {
      state.openQuestions = action.payload.openQuestions
    },
  },
})

export const { update } = questionSlice.actions

export default questionSlice.reducer
