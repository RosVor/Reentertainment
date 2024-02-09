import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../components/api'; 

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const backLinkHref = location.state?.from ?? "/";

  return (
    <div>
      <button onClick={() => navigate(backLinkHref)}>Return</button>
      <div className='movies-details'>
      <img 
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
          alt={movieDetails.title} 
          onError={(e) => {e.target.onerror = null; e.target.src="https://source.unsplash.com/random/500x750"}}
        />
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
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetails;