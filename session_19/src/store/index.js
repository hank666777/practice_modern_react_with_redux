import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    }
  }
})

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
});

const store = configureStore({
  reducer: {
    // state = {} or [] or '' = initialState
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  }
})

// debug
const startingState = store.getState();
console.log(JSON.stringify(startingState))

export { store };
export const { addSong, removeSong} = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
