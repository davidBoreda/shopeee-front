import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routes";

import AlertPartial from "../partials/AlertPartial";
import { validateNewPassSchema } from "../validation/ClientValidation";

const ResetPasswordPage = () => {
  const clientInfo = useSelector((state) => state.authStore.clientInfo);

  const [clientInputs, setClientInputs] = useState({
    password: "",
    repeatPassword: "",
  });
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const handleUserInputsChange = (ev) => {
    const newClientInputs = { ...clientInputs };
    newClientInputs[ev.target.id] = ev.target.value;
    setClientInputs(newClientInputs);
  };

  if (!clientInfo) {
    navigate(ROUTES.HOME);
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const errors = validateNewPassSchema(clientInputs);
      if (errors) {
        console.log(errors);
        setErrMessage(errors);
      } else {
        const response = await axios.patch("/client/resetpassword", {
          password: clientInputs.password,
          repeatPassword: clientInputs.repeatPassword,
        });
        let { msg } = response.data;

        toast.success(msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Reset Password Page</h1>

        <div className="mb-3 col-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={clientInputs.password}
            onChange={handleUserInputsChange}
          />
        </div>
        {errMessage && errMessage.password && (
          <AlertPartial>
            {errMessage.password.map((item) => (
              <div key={item + Date.now()}>{item}</div>
            ))}
          </AlertPartial>
        )}

        <div className="mb-3 col-3">
          <label htmlFor="passwordInput" className="form-label">
            Repeat Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            value={clientInputs.repeatPassword}
            onChange={handleUserInputsChange}
          />
        </div>
        {errMessage && errMessage.repeatPassword && (
          <AlertPartial>
            {errMessage.repeatPassword.map((item) => (
              <div key={item + Date.now()}>{item}</div>
            ))}
          </AlertPartial>
        )}

        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordPage;
