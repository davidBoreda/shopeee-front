import PropTypes from "prop-types";
import { memo } from "react";

import { btnPartialOptions } from "./ButtonPartial";

const MemoButtonPartial = ({ btnOption, icon, children }) => {
  console.log(" memo btn rendered");
  // const defaultBtnOption = btnPartialOptions.primary;
  return (
    // <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
    <button className={`btn btn-${btnOption}`}>
      {icon && <i className={`bi ${icon}`}></i>}
      {children}
    </button>
  );
};

MemoButtonPartial.propType = {
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

MemoButtonPartial.defaultProps = {
  btnOption: btnPartialOptions.primary,
  children: "I'm a btn",
};

export default memo(MemoButtonPartial);
