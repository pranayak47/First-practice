import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  favoriteMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    addFavoriteMovie: (state, action) => {
      const movie = action.payload;
      if (!state.favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFavoriteMovie: (state, action) => {
      const movieId = action.payload;
      state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.id !== movieId);
    },
  },
});

export const { setMovies, addFavoriteMovie, removeFavoriteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
