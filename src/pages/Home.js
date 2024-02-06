import React, { useEffect, useState } from 'react';
import MovieList from '../components/MoviesList';
import { getTrendingMovies } from '../components/api';
import '../components/main.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies Today</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;



