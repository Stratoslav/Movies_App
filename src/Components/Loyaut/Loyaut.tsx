import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Loyaut.scss';
const Loyaut = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={'wrap'}>
        <NavLink
          onClick={() => setIsActive(false)}
          className={isActive ? 'link' : 'link_active'}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsActive(true)}
          className={!isActive ? 'link' : 'link_active'}
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          onClick={() => setIsActive(true)}
          className={!isActive ? 'link' : 'link_active'}
          to="/actors"
        >
          Actor
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export { Loyaut };
