import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from './api'; 
import SearchForm from './SearchForm';
import '../Movies.css';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      {/* Передаємо функцію handleSearch як пропс в SearchForm */}
      <SearchForm onSearch={handleSearch} />
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
