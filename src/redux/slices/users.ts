import { UserData } from '@/@types/users/userData';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  users: UserData[];
  total: number;
}

export const UserSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    total: 0,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setUsers, setTotal } = UserSlice.actions;
export default UserSlice.reducer;
