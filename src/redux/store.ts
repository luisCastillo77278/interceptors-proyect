import { configureStore } from '@reduxjs/toolkit';
import { UserInfo } from '../models/user.model';
import userReducer from './slices/user.slice';

export interface AppStore {
  user: UserInfo;
}

const store = configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});

export default store;
