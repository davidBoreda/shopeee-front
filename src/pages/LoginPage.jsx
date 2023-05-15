import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validateLoginSchema from "../validation/loginValidation";
import AlertPartial from "../partials/AlertPartial";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(userInputs));
    newInputsValue[ev.target.id] = ev.target.value;
    setUserInputs(newInputsValue);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const errors = validateLoginSchema(userInputs);
      if (errors) {
        console.log(errors);
        setErrMessage(errors);
      } else {
        const { data } = await axios.post("/client/login", {
          email: userInputs.emailInput,
          password: userInputs.passwordInput,
        });
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Login Page</h1>

        <div className="mb-3 col-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            value={userInputs.emailInput}
            onChange={handleInputChange}
          />
          {errMessage && errMessage.emailInput && (
            <AlertPartial>
              {errMessage.emailInput.map((item) => (
                <div key={item + Date.now()}>{item}</div>
              ))}
            </AlertPartial>
          )}
        </div>
        <div className="mb-3 col-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={userInputs.passwordInput}
            onChange={handleInputChange}
          />
        </div>
        {errMessage && errMessage.passwordInput && (
          <AlertPartial>
            {errMessage.passwordInput.map((item) => (
              <div key={item + Date.now()}>{item}</div>
            ))}
          </AlertPartial>
        )}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
