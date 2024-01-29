import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HeaderSharedLayout = () => {
  return (
    <div>
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
      <footer></footer>
    </div>
  );
};

export default HeaderSharedLayout;