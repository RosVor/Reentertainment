import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HeaderSharedLayout = () => {
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
          <Outlet />
        </Suspense>
      </main>
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default HeaderSharedLayout;