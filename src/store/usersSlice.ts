import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../app/utils/types";
import { RootState } from "./store";

interface UsersState {
  allUsers: UserInterface[];
}

const initialState: UsersState = {
  allUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInterface>) => {
      state.allUsers.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.id !== action.payload
      );
    },
    updateUser: (state, action: PayloadAction<UserInterface>) => {
      const user = state.allUsers.find((u) => u.id === action.payload.id);
      if (user) {
        user.username = action.payload.username;
      }
    },
  },
});
export const selectAllusers = (state: RootState) => state.usersData.allUsers;
export const { addUser, removeUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
