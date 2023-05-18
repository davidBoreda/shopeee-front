import { NavLink } from "react-router-dom";

const NavbarLinkPartial = ({
  to,
  className,
  activeClassName,
  children,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [className, isActive ? activeClassName : null].filter(Boolean).join(" ")
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default NavbarLinkPartial;
