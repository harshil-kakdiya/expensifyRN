import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/redux/slices/User';
export const store = configureStore({
  reducer: {
    userReducer
  },
})