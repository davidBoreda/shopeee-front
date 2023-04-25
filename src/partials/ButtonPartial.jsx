import PropTypes from "prop-types";

const btnPartialOptions = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  link: "link",
};

const ButtonPartial = ({ btnOption, icon, children }) => {
  // const defaultBtnOption = btnPartialOptions.primary;
  return (
    // <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
    <button className={`btn btn-${btnOption}`}>
      {console.log("btn rendered")}
      {icon && <i className={`bi ${icon}`}></i>}
      {children}
    </button>
  );
};

ButtonPartial.propType = {
  icon: (props, propName, componentName) => {
    if (/!^bi-([a-z]+)-([a-z]+)-([a-z]+)-([a-z]+)$/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
  btnOption: PropTypes.oneOf(Object.values(btnPartialOptions)),
  children: PropTypes.string.isRequired,
};

ButtonPartial.defaultProps = {
  btnOption: btnPartialOptions.primary,
  children: "I'm a btn",
};
export { btnPartialOptions };
export default ButtonPartial;
