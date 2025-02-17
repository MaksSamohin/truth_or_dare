import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import gameReducer from "./gameSlice";
import localizationReducer from "./localizationSlice";
export const store = configureStore({
  reducer: {
    usersData: usersReducer,
    gameData: gameReducer,
    localization: localizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
