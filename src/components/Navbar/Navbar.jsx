import "./Navbar.css";

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
            <li className="nav-item">
              <a
                className={`nav-link ${
                  isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                } active`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                } active`}
                href="#"
              >
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle nav-link ${
                  isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                } active`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className={`dropdown-menu ${
                  isDark ? "bg-primary" : "bg-light"
                }`}
              >
                <li>
                  <a
                    className={`dropdown-item ${
                      isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                    }`}
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className={`dropdown-item ${
                      isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                    }`}
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className={`dropdown-item ${
                      isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                    }`}
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                } disabled`}
              >
                Disabled
              </a>
            </li>
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
