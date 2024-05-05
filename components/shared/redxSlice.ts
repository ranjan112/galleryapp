import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainState, TThemeMode } from './types'



// Define the initial state using that type
const initialState: IMainState = {
  page: 1,
  searchValue: '',
  searchMoviePage: 1,
  colorMode: 'light'
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
 
})

export const { 
  
} = mainSlice.actions

export default mainSlice.reducer