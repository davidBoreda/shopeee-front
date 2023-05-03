import { NavLink } from "react-router-dom";

const NavbarLinkPartial = ({ to, className, activeClassName, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [className, isActive ? activeClassName : null].filter(Boolean).join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

export default NavbarLinkPartial;
