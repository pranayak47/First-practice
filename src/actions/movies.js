import { fetchMovies } from '../api';
import { setMovies } from '../reducers/movies';

export const fetchMoviesAsync = () => async (dispatch) => {
  try {
    const movies = await fetchMovies();
    dispatch(setMovies(movies));
  } catch (error) {
    // Handle error, e.g., dispatch an action to display an error message
  }
};
