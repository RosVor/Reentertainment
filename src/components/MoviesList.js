import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={{ movie }}>
          <p>{movie.title}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;