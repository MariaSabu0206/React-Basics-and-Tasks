import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const Counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    multiplication: (state) => {
        state.count = state.count*2
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,multiplication } = Counterslice.actions

export default Counterslice.reducer