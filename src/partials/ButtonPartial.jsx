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
  const defaultBtnOption = btnPartialOptions.primary;
  return (
    <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
      <i className={`bi ${icon}`}></i>
      {children}
    </button>
  );
};

export { btnPartialOptions };
export default ButtonPartial;
