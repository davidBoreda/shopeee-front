import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReduxPage3 = () => {
  const str = useSelector((state) => state.letterStore.str);
  return (
    <Fragment>
      <h1>{str}</h1>
      <Link to="/redux2">to redux 2</Link>
    </Fragment>
  );
};
export default ReduxPage3;
