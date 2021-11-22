import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: [],
    isLogin: false,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    LOGOUT: state => {
      state.user = [];
      state.isLogin = false;
    },
  },
});

export const selectUser = state => state.user;
export const { LOGIN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
