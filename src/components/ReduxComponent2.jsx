import { Fragment } from "react";
import { useSelector } from "react-redux";

const ReduxComponent2 = () => {
  const counter = useSelector((state) => state.counterStore.counter);
  return <Fragment>{counter}</Fragment>;
};
export default ReduxComponent2;
