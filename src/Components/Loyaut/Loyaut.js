import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../Loyaut/Loyaut.module.css";
const Loyaut = () => {
  const isActiveRef = ({ isActive }) =>
    isActive ? styles.link_active : styles.link;
  return (
    <div>
      <NavLink className={isActiveRef} to="/">
        Home
      </NavLink>
      <NavLink className={isActiveRef} to="/movies">
        Movies
      </NavLink>
      <Outlet />
    </div>
  );
};

export { Loyaut };
