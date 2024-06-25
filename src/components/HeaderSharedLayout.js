import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../style/HeaderLayout.css';

const HeaderSharedLayout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul className="header-list">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div className="footer-content">
          <p>Contact us:</p>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HeaderSharedLayout;