import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './api';
import '../style/AddInfo.css'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3 className='review-author'>{review.author}</h3>
              <p className='review-content'>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
