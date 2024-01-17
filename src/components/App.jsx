import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import '../components/main.css';

const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="header-list">
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" activeClassName="active">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;
