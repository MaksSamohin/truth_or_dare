import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    usersData: usersReducer,
    gameData: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
