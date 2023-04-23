import { Fragment, useState } from "react";

const RegisterPage = () => {
  const [inputsValue, setInputsValue] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });
  const handleBtnClick = () => {
    console.log("clicked");
  };
  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(inputsValue));
    newInputsValue[ev.target.id] = ev.target.value;
    setInputsValue(newInputsValue);
  };
  return (
    <Fragment>
      <h1>Register Page</h1>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name :{inputsValue.nameInput}
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          aria-describedby="nameInput"
          value={inputsValue.nameInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address : {inputsValue.emailInput}
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
      <button className="btn btn-primary" onClick={handleBtnClick}>
        Submit
      </button>
    </Fragment>
  );
};

export default RegisterPage;
