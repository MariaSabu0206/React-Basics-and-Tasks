import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 4,
}

export const Slice2 = createSlice({
  name: 'counter2',
  initialState,
  reducers: {
    addition: (state) => {
      state.value += 2
    },
    subtraction: (state) => {
      state.value -= 2
    },
   
   division: (state) => {
        state.value = state.value/2
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { addition, subtraction,division } = Slice2.actions

export default Slice2.reducer