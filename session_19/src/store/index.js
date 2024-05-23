import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slice/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slice/moviesSlice';
import { reset } from './actions';

const store = configureStore({
  reducer: {
    // state = {} or [] or '' = initialState
    // songs: songsSlice.reducer,
    songs: songsReducer,
    // movies: moviesSlice.reducer,
    movies: moviesReducer,
  }
})

// debug
const startingState = store.getState();
console.log(JSON.stringify(startingState))

export { store, reset, addSong, removeSong, addMovie, removeMovie };
