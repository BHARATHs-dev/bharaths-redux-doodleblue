import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice.js';

export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});