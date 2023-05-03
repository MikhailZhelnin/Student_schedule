import {configureStore} from "@reduxjs/toolkit";
import {timeTableReducer} from "./timetable/timetable/timetable.slice";

export const store = configureStore({
  reducer: {
    timeTable: timeTableReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type TypeRootState = ReturnType<typeof store.getState>