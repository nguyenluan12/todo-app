import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./slices/valueSlice";

export const store = configureStore({
  reducer: {
    value: valueReducer
  }
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
