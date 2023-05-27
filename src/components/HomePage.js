import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync, } from '../actions/movies';
import { addFavoriteMovie } from '../reducers/movies';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  const handleAddFavorite = (movie) => {
    dispatch(addFavoriteMovie(movie));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => handleAddFavorite(movie)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
