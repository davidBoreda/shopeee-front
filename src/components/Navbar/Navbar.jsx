import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import NavbarLinkPartial from "../../partials/NavbarLinkPartial";
import "./Navbar.css";
import LinkClass from "../../classes/LinkClass";
import NavbarLinkComponent from "./NavbarLinkComponent";
import { searchActions } from "../../store/search";
import { themeActions } from "../../store/theme";

const linkArr = [
  new LinkClass("Home", "/"),
  new LinkClass("About Us", "/aboutus"),
  new LinkClass("Contact", "/contactuspage"),
];

const logRegLinkArr = [
  new LinkClass("Register", "/register"),
  new LinkClass("Login", "/loginpage"),
];

// const urlArr = [];
const Navbar = ({ isDark }) => {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn);
  const clientInfo = useSelector((state) => state.authStore.clientInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchActions.setSearchQuery(searchInput));
    navigate("/searchedbrand");
  };

  // const [isToggled, setIsToggled] = useState(false);

  // const handleDarkLightClick = () => {
  //   setIsToggled((prevState) => !prevState);

  //   console.log(isToggled);
  // };

  let themeState = false;
  const handleDarkLightClick = () => {
    dispatch(themeActions.setTheme(themeState));
  };

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
          Shopeee
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
                <NavbarLinkComponent
                  key={item.name + Date.now()}
                  isDark={isDark}
                  to={item.link}
                >
                  {item.name}
                </NavbarLinkComponent>
              );
            })}
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
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
          <div className="authDiv">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn
                ? [
                    <NavbarLinkComponent
                      key={clientInfo.fName + Date.now()}
                      isDark={isDark}
                      to="/profilepage"
                    >
                      {clientInfo.fName}
                    </NavbarLinkComponent>,
                    <NavbarLinkComponent
                      key={"/logout" + Date.now()}
                      isDark={isDark}
                      to="/loginpage"
                      onClick={handleLogoutClick}
                    >
                      Logout
                    </NavbarLinkComponent>,
                  ]
                : logRegLinkArr.map((item) => {
                    return (
                      <NavbarLinkComponent
                        key={item.name + Date.now()}
                        isDark={isDark}
                        to={item.link}
                      >
                        {item.name}
                      </NavbarLinkComponent>
                    );
                  })}
            </ul>
          </div>

          <button
            type="button"
            className={`btn btn-outline btn-sm ${
              isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
            }`}
            onClick={handleDarkLightClick}
          >
            <i className="bi bi-brightness-high"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
