// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLogin:false
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLogin = true
    },
    logout:(state)=>{
      state.token = null;
      state.isLogin = false
    }
  },
});

export const { setToken , logout } = authSlice.actions;
export default authSlice.reducer;
