import { configureStore } from '@reduxjs/toolkit'
import  Counterslice  from './Counterslice'
import  Slice2  from './Slice2'

export const store = configureStore({
  reducer: {
    counter: Counterslice,
    test2: Slice2
  },
})