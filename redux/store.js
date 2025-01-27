// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './firstSlice';  // Import the firstSlice to use in the store

const store = configureStore({
  reducer: {
    cart: firstReducer,  // Register the reducer here
  },
});

export default store;
