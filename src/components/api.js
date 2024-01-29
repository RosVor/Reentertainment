const apiKey = '39aef1fe202d396da43aaee435d1e2cc';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const searchMovies = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return [];
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    return [];
  }
};