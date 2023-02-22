import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Loyaut.scss';
const Loyaut = () => {
  const [isActive, setIsActive] = useState(false);

  const wrap = document.getElementsByClassName('wrap');
  const link = document.getElementsByClassName('link');

  for (let i = 1; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      link[i].className.replace('', 'active');
      //   let current = document.getElementsByClassName('active');
      //   if (current.length > 0) {
      //   current[0].className = current[0].className.replace('active', '');
      // }

      this.className += 'active';
    });
  }
  function myFunction(e) {
    let elems = document.querySelectorAll('.active');
    [].forEach.call(elems, function (el) {
      el.classList.remove('active');
    });
    e.target.className = 'link active';
  }

  return (
    <>
      <div className="wrap" onClick={(e) => myFunction(e)}>
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
          Actors
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export { Loyaut };
