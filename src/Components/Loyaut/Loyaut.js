import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Loyaut.module.css";
const Loyaut = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <NavLink
        onClick={setIsActive(false)}
        className={isActive ? styles.link_active : styles.link}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={setIsActive(true)}
        className={!isActive ? styles.link_active : styles.link}
        to="/movies"
      >
        Movies
      </NavLink>
      <Outlet />
    </div>
  );
};

export { Loyaut };
