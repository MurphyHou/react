import { configureStore } from '@reduxjs/toolkit'
import foodsReducers from './modules/takeaway'

const store = configureStore({
  reducer: {
    foods: foodsReducers,
  },
})

export default store
