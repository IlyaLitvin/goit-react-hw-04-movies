import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes.js";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to={routes.HomePage} className="Button">
        Home
      </NavLink>
      <NavLink exact to={routes.MoviesPage} className="Button">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
