import { configureStore } from '@reduxjs/toolkit';
import pwlReducer from "../reducer/appSlice"

const store = configureStore({
  reducer: {
    pwl: pwlReducer,
  },
});

export default store;
