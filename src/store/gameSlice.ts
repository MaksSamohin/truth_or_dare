import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../app/utils/types";
import { RootState } from "./store";

interface GameState {
  playingUsers: UserInterface[];
  currentPlayer: string;
  gamemode: string | null;
}

const initialState: GameState = {
  playingUsers: [],
  currentPlayer: "",
  gamemode: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGamemode: (state, action: PayloadAction<string>) => {
      state.gamemode = action.payload;
    },
    setPlayers: (state, action: PayloadAction<UserInterface[]>) => {
      state.playingUsers = action.payload;
    },
    setCurrentPlayer: (state, action: PayloadAction<string>) => {
      state.currentPlayer = action.payload;
    },
    nextPlayer: (state) => {
      if (state.playingUsers.length > 0) {
        const currentIndex = state.playingUsers.findIndex(
          (user) => user.username === state.currentPlayer
        );
        const nextIndex = (currentIndex + 1) % state.playingUsers.length;
        state.currentPlayer = state.playingUsers[nextIndex].username;
      }
    },
  },
});
export const selectGamemode = (state: RootState) => state.gameData.gamemode;
export const selectPlayer = (state: RootState) => state.gameData.currentPlayer;
export const { setPlayers, setCurrentPlayer, nextPlayer, updateGamemode } =
  gameSlice.actions;
export default gameSlice.reducer;
