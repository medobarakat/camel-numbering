// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: sessionStorage.getItem('token') || null,
    isLogin: sessionStorage.getItem('token') ? true : false,
    userData : null,
    wallet_id:null
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
    setWalletId:(state , action)=>{
      state.wallet_id = action.payload
    }
  },
});

export const { setToken , logout , setUser , removeUser ,setWalletId } = authSlice.actions;
export default authSlice.reducer;
