import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=39aef1fe202d396da43aaee435d1e2cc`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=39aef1fe202d396da43aaee435d1e2cc`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=39aef1fe202d396da43aaee435d1e2cc`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchMovieDetails();
    fetchCast();
    fetchReviews();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Return</button>
     <div className='movies-details'>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <div className='movies-details-info'>
      <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
      <p>{movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
      </div>
      </div>
      <nav>
      <p>Additional information</p>
        <ul>
          <li>
            <Link to="#" onClick={handleToggleCast}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleToggleReviews}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      {showCast && (
        <div>
          <h3>Cast</h3>
          <ul>
            {cast.map((actor) => (
              <li key={actor.id}>
                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showReviews && (
        <div>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;