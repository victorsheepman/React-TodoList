import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
      <header className='header'>
          <h1>#todo</h1>
          <nav>
              <ul>
                <NavLink className={(navData) => navData.isActive ? "lista--active" : "lista" } to='/'>All</NavLink>
                <NavLink className={(navData) => navData.isActive ? "lista--active" : "lista" } to='/Active'>Active</NavLink>
                <NavLink className={(navData) => navData.isActive ? "lista--active" : "lista" } to='/Completed'>Completed</NavLink>

              </ul>
          </nav>
      </header>
  );
};
