import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Loyaut.scss';
const Loyaut = () => {
  const [isActive, setIsActive] = useState(false);

  const wrap = document.getElementsByClassName('wrap');
  const link = document.getElementsByClassName('link');
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (this: any) {
      let current = document.getElementsByClassName('active');
      // if (current.length > 0) {
      current[0].className = current[0].className.replace('active', '');
      // }
      this.className += 'active';
    });
  }

  return (
    <>
      <div className="wrap">
        <NavLink
          // onClick={() => setIsActive(false)}
          // className={isActive ? 'link' : 'link_active'}
          className="link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          // onClick={() => setIsActive(true)}
          // className={!isActive ? 'link' : 'link_active'}
          to="/movies"
          className="link"
        >
          Movies
        </NavLink>
        <NavLink
          // onClick={() => setIsActive(true)}
          // className={!isActive ? 'link' : 'link_active'}
          className="link"
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
