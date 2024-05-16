import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from '../slices/users';

export const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
