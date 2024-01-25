export const searchMovies = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=39aef1fe202d396da43aaee435d1e2cc&query=${searchQuery}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  };
  