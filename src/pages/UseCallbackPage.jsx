import { Fragment, useCallback, useState } from "react";
import ErrorValidationListComponent from "../components/ErrorValidationListComponent";

const UseCallbackPage = () => {
  const [counter, setCounter] = useState(0);
  const [errors, setErrors] = useState([]);
  const handleBtnClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleAddErrorBtnClick = useCallback(() => {
    setErrors((prevState) => [...prevState, "new error"]);
  }, [errors]);
  return (
    <Fragment>
      {counter}
      <button onClick={handleBtnClick}>add 1</button>
      <button onClick={handleAddErrorBtnClick}>add error</button>
      <hr />
      <ErrorValidationListComponent
        errorsArr={errors}
        onClick={handleAddErrorBtnClick}
      />
    </Fragment>
  );
};

export default UseCallbackPage;
