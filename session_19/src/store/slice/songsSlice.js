import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // song + / + addSong = 'song/addSong'
    addSong(state, action) {
      // state is not the big state object in the store
      // It is the piece of state managed by this reducer
      state.push(action.payload);
    },
    // song + / + removeSong = 'song/removeSong'
    removeSong(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  // some additional action types that it should "care about"
  extraReducers(builder) {
    // not recommend
    // return builder.addCase('movie/reset', (state, action) => {
    // return builder.addCase(
    // moviesSlice.actions.reset,
    // (state, action) => {
    //   return []
    // }
    // )
    builder.addCase(reset, (state, action) => {
      return []
    })
  }
});

// Action is an object, the addMovie/removeSong action creator function.
export const { addSong, removeSong} = songsSlice.actions;
// 這是一個處理 state 和 action 的纯函数，根據 action 的類型更新 state。
export const songsReducer =  songsSlice.reducer;