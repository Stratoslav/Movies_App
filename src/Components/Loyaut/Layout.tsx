//react
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
//components
import { RootState } from '../../redux/store';
import {
  DeleteSessionApi,
  getAuthUser,
  getGuestSession,
  RequestTokenApi
} from '../../API/authApi';
//styles
import './Layout.scss';

const Layout = () => {
  const requestToken = useSelector((s: RootState) => s.auth.requestToken);
  const sessionId = useSelector((s: RootState) => s.auth.sessionId);

  const dispatch = useDispatch();
  const guestSession = useSelector((s: RootState) => s.auth.guest);

  function addActiveClass(e: any) {
    let elem = document.querySelectorAll('.active');
    [].forEach.call(elem, function (el: any) {
      el.classList.remove('active');
    });
    e.target.className = 'link active';
  }
  useEffect(() => {
    getGuestSession(dispatch);
     RequestTokenApi(dispatch);
    if (requestToken.request_token) {
      getAuthUser(requestToken.request_token, dispatch);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
 
  const handelDeleteSession = () => {
    DeleteSessionApi(sessionId, dispatch);
  };
console.log(sessionId)
  return (
    <div>
      <div className="wrap" onClick={(e) => addActiveClass(e)}>
        <div className="wrap__link">
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/movies" className="link">
            Movies
          </NavLink>
          <NavLink to="/actors" className="link">
            Actors
          </NavLink>
        </div>
        <div className="wrap__session">
          {guestSession.success ? (
            <div>
              <div>
                {sessionId ? (
                  <div className="session">
                    <p
                      className="log-out"
                      onClick={() => handelDeleteSession()}
                    >
                      LogOut
                    </p>
                    <p className="link">User</p>
                  </div>
                ) : (
                  <a
                    className="log-in"
                    target="_blank"
                    href={`https://www.themoviedb.org/authenticate/${requestToken.request_token}?redirect_to=localhost:3000/`}
                    rel="noreferrer"
                  >
                    LogIn
                  </a>
                )}
              </div>
              <img
                className="wrap__session-img"
                alt=""
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </div>
          ) : null}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
