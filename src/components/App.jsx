import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import '../components/main.css';

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
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <footer>
      </footer>
    </div>
  );
};
export default App;
