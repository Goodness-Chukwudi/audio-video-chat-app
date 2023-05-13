import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chats: [],
  user: ""
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,

  reducers: {
    deleteChat: (state) => {

    },

    setChats: (state, action) => {
      state.chats = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const getChats = (state) => state.chat.chats;
export const getUser = (state) => state.chat.user;

export const { setChats } = chatSlice.actions;
export const { setUser } = chatSlice.actions;

export default chatSlice.reducer;
