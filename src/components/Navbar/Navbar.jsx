import "./Navbar.css";
import { Fragment } from "react";

const navLinksArr = ["Home", "About Us", "Register", "Contact Us", "Login"];

const Navbar = ({ isDark }) => {
  return (
    <nav
      className={`navbar ${
        isDark ? "bg-primary" : "bg-light"
      } navbar-expand-lg bg-body-tertiary`}
    >
      <div className="container-fluid">
        <a
          className={`navbar-brand ${
            isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
          }`}
          href="#"
        >
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinksArr.map((item) => {
              return (
                <li className="nav-item" key={item + Date.now()}>
                  <a
                    className={`nav-link ${
                      isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                    } active`}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn ${
                isDark ? "btn-outline-light" : "btn-outline-dark"
              }`}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
