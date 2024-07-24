import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from './api';
import '../style/AddInfo.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await getMovieCast(movieId);
      setCast(data);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className='cast-list'>
        {cast.map((actor) => (
          <li className='cast-item' key={actor.id}>
            <img
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://source.unsplash.com/random/200x300'}
              alt={actor.name}
            />
            <p className='Name'>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
