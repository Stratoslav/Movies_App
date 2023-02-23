import { NavLink, Outlet } from 'react-router-dom';
import './Loyaut.scss';
const Loyaut = () => {
  const link = document.getElementsByClassName('link');

  for (let i = 1; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      link[i].className.replace('', 'active');

      this.className += 'active';
    });
  }
  function myFunction(e) {
    let elem = document.querySelectorAll('.active');
    [].forEach.call(elem, function (el) {
      el.classList.remove('active');
    });
    e.target.className = 'link active';
  }

  return (
    <>
      <div className="wrap" onClick={(e) => myFunction(e)}>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink to="/movies" className="link">
          Movies
        </NavLink>
        <NavLink className="link" to="/actors">
          Actors
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Loyaut;
