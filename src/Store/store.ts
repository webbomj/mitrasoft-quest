import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    postData: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
