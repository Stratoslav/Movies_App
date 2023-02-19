import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Loyaut.module.css';
const Loyaut = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.wrap}>
        <NavLink
          onClick={() => setIsActive(false)}
          className={isActive ? styles.link : styles.link_active}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsActive(true)}
          className={!isActive ? styles.link : styles.link_active}
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          onClick={() => setIsActive(true)}
          className={!isActive ? styles.link : styles.link_active}
          to="/actor"
        >
          Actor
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export { Loyaut };
