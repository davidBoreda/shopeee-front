import NavbarLinkPartial from "../../partials/NavbarLinkPartial";

const NavbarLinkComponent = ({ isDark, to, children, onClick }) => {
  return (
    <li className="nav-item">
      <NavbarLinkPartial
        className={`nav-link ${
          isDark ? "nav-item-dark-theme" : "nav-item-light-theme"
        } active`}
        to={to}
        activeClassName="activeLink"
        onClick={onClick}
      >
        {children}
      </NavbarLinkPartial>
    </li>
  );
};
export default NavbarLinkComponent;
