import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [userInputs, setUserInputs] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const newInputsValue = JSON.parse(JSON.stringify(userInputs));
    newInputsValue[ev.target.id] = ev.target.value;
    setUserInputs(newInputsValue);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/client/login", {
        email: userInputs.emailInput,
        password: userInputs.passwordInput,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      navigate("/");
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

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
