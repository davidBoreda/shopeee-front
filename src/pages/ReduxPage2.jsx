import { useDispatch } from "react-redux";
import { strActions } from "../store/letter";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ReduxPage2 = () => {
  const dispatch = useDispatch();
  const handleAddA = () => {
    dispatch(strActions.addA());
  };
  const handleAddB = () => {
    dispatch(strActions.addB());
  };
  const handleAddDavid = () => {
    dispatch(strActions.addStr(" david "));
  };
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    dispatch(strActions.addStr(userInput));
  };
  return (
    <Fragment>
      <button onClick={handleAddA}>add a</button>
      <button onClick={handleAddB}>add asd</button>
      <button onClick={handleAddDavid}>add david</button>
      <input type="text" onChange={handleInputChange} />
      <Link to="/redux3">to redux 3</Link>
    </Fragment>
  );
};
export default ReduxPage2;
