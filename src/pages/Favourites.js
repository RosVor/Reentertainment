import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <div className='div-main'>
      <h2>Favourite Movies</h2>
      <div className="movies-list-container">
      {favourites.length === 0 ? (
        <p>No favourite movies added.</p>
      ) : (
        <ul className="movies-list">
          {favourites.map((movie) => (
            <li key={movie.id} className="movies-list-item">
              <Link to={`/movies/${movie.id}`} className="movies-list-link">
              <div className="movies-list-card">
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://source.unsplash.com/random/200x300'}
                    alt={movie.title}
                    className="movies-list-poster"
                  />
                  <p className="movies-list--title">{movie.title}</p>
                  </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Favourites;
