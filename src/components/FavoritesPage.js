import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteMovie } from '../reducers/movies';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  const handleRemoveFavorite = (movieId) => {
    dispatch(removeFavoriteMovie(movieId));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => handleRemoveFavorite(movie.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
