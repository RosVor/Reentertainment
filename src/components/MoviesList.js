import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/MoviesList.css';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className="movies-list-container">
      <ul className="movies-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movies-list-item">
            <Link className="movies-list-link" to={`/movies/${movie.id}`} state={{ from: location }}>
              <div className="movies-list-card">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://source.unsplash.com/random/200x300'}
                  alt={movie.title}
                  className="movies-list-poster"
                />
                <p className="movies-list-title">{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;



