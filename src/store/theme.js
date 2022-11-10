import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColorMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
