import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderSharedLayout from './HeaderSharedLayout';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderSharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />} />
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;


