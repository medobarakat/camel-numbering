// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: sessionStorage.getItem('token') || null,
    isLogin: sessionStorage.getItem('token') ? true : false,
    userData : null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
      sessionStorage.setItem('token', action.payload);

    },
    logout:(state)=>{
      state.token = null;
      state.isLogin = false;
      sessionStorage.removeItem('token');

    },
    setUser:(state , action)=>{
      state.userData = action.payload
    },
    removeUser:(state )=>{
      state.userData = null
    },
  },
});

export const { setToken , logout , setUser , removeUser } = authSlice.actions;
export default authSlice.reducer;
