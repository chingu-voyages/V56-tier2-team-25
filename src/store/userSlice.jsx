import { createSlice } from '@reduxjs/toolkit';

const savedUser = localStorage.getItem("userData");

const initialState = {
  userData: savedUser ? JSON.parse(savedUser) : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    clearUserData(state) {
      state.userData = null;
      localStorage.removeItem("userData"); // Clear from localStorage too
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
