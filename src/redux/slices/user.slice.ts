import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/user.model';
import { clearLocalStorage, saveLocalStorage } from '../../utilities/localStorate';

export const PersistKey = 'user';

const EmptyUserState: UserInfo = {
  id: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  username: '',
};

const initialState = window.localStorage.getItem(PersistKey)
  ? JSON.parse(window.localStorage.getItem(PersistKey) as string)
  : EmptyUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create: (state, action) => {
      saveLocalStorage<UserInfo>(PersistKey, action.payload);
      return action.payload;
    },
    reset: () => {
      clearLocalStorage(PersistKey);
      return initialState;
    },
  },
});

export const { reset, create } = userSlice.actions;

export default userSlice.reducer;
