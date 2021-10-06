import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
      <header className="header">
        <div className="header__logo">
          <Link to="/" className="header__link">
            <h2>Jagdish Saini</h2>
          </Link>
        </div>
        <ul className="header__list">
          <li className="header__li">
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li className="header__li">
            <Link to="/projects" className="header__link">
              Projects
            </Link>
          </li>
          <li className="header__li">
            <Link to="/blogs" className="header__link">
              Blogs
            </Link>
          </li>
        </ul>
      </header>
  );
};

export default Header;
