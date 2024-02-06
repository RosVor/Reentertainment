import React, { useState, useEffect } from 'react';
import { searchMovies } from '../components/api';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const query = searchParams.get('query');
        if (!query) return;
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [searchParams]);

  const handleSearch = (query) => {
    searchParams.set('query', query);
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
