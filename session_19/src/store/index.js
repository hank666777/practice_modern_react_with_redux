import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // song + / + addSong = 'song/addSong'
    addSong(state, action) {
      // state is not the big state object in the store
      // iit is the piece of state managed by this reducer
      state.push(action.payload);
    },
    // song + / + removeSong = 'song/removeSong'
    removeSong(state, action) {
    },
  },
});

const store = configureStore({
  reducer: {
    // state = {} or [] or '' = initialState
    songs: songsSlice.reducer,
  }
})

// debug
const startingState = store.getState();
console.log(JSON.stringify(startingState))


store.dispatch(
  songsSlice.actions.addSong("New Song!!!")
)

console.log('actions2: ', store.getState())