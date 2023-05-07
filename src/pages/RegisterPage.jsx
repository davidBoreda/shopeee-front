import { Fragment, useState, useEffect } from "react";
import ButtonPartial from "../partials/ButtonPartial";
import ErrorValidationListComponent from "../components/ErrorValidationListComponent";
import { useNavigate } from "react-router-dom";
import validateRegisterSchema from "../validation/registerValidation";

const RegisterPage = () => {
  const [inputsValue, setInputsValue] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });
  const [errorsState, setErrorsState] = useState({
    nameInput: [],
    emailInput: [],
    passwordInput: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    //on load to elm/component
    return () => {
      //when elm destroyed
      console.log("elm done");
    };
  }, []);
  useEffect(() => {
    //each time inputsValue value changed this function will be executed
    // console.log("inputsValue changed", inputsValue);
    let newErrorsState = JSON.parse(JSON.stringify(errorsState));
    for (const [key, value] of Object.entries(inputsValue)) {
      // console.log(`${key}: ${value}`);
      if (!value) {
        newErrorsState[key] = ["this field should not be empty"];
      } else {
        newErrorsState[key] = [];
      }
    }
    setErrorsState(newErrorsState);
  }, [inputsValue]);
  const handleBtnClick = () => {
    const validatedValues = validateRegisterSchema(inputsValue);
    console.log("vv", validatedValues);
    // navigate("/loginpage");
  };
  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };
  return (
    <Fragment>
      <h1>Register page</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          aria-describedby="emailHelp"
          value={inputsValue.nameInput}
          onChange={handleInputChange}
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          value={inputsValue.emailInput}
          onChange={handleInputChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        <ErrorValidationListComponent errorsArr={errorsState.emailInput} />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          value={inputsValue.passwordInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <ButtonPartial onClick={handleBtnClick}>Register now</ButtonPartial>
    </Fragment>
  );
};
export default RegisterPage;
