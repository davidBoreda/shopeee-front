import NavbarLinkPartial from "../../partials/NavbarLinkPartial";
import "./Navbar.css";
import LinkClass from "../../classes/LinkClass";

// const navLinksArr = [
//   { linkName: "Home", linkUrl: "/" },
//   { linkName: "About Us", linkUrl: "/aboutus" },
//   { linkName: "Register", linkUrl: "/registerpage" },
//   { linkName: "Contact Us", linkUrl: "/contactuspage" },
//   { linkName: "Login", linkUrl: "/loginpage" },
// ];

const linkArr = [
  new LinkClass("Home", "/"),
  new LinkClass("About Us", "/aboutus"),
  new LinkClass("Contact", "/contactuspage"),
  new LinkClass("Register", "/registerpage"),
  new LinkClass("Login", "/loginpage"),
];

// const urlArr = [];
const Navbar = ({ isDark }) => {
  return (
    <nav
      className={`navbar ${
        isDark ? "bg-primary" : "bg-light"
      } navbar-expand-lg bg-body-tertiary`}
    >
      <div className="container-fluid">
        <NavbarLinkPartial
          className={`navbar-brand ${
            isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
          }`}
          to="/"
          activeClassName="activeLink"
        >
          Navbar
        </NavbarLinkPartial>
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
            {linkArr.map((item) => {
              return (
                <li className="nav-item" key={item.name + Date.now()}>
                  <NavbarLinkPartial
                    className={`nav-link ${
                      isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
                    } active`}
                    to={item.link}
                    activeClassName="activeLink"
                  >
                    {item.name}
                  </NavbarLinkPartial>
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
