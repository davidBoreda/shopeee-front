import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const ReduxComponent1 = () => {
  const dispatch = useDispatch();
  const handleAdd1 = () => {
    dispatch(counterActions.add1());
  };
  const handleSub1 = () => {
    dispatch(counterActions.sub1());
  };
  const handleAdd5 = () => {
    dispatch(counterActions.addNumber(5));
  };

  return (
    <Fragment>
      <button onClick={handleAdd1}>+1</button>
      <button onClick={handleSub1}>-1</button>
      <button onClick={handleAdd5}>+5</button>
    </Fragment>
  );
};

export default ReduxComponent1;
