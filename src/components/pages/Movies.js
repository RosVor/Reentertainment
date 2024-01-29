import React, { useState } from 'react';
import { searchMovies } from '../api';
import SearchForm from '../SearchForm';
import MovieList from '../MoviesList'; 

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Movies;


