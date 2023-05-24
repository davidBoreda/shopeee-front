import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import ROUTES from "../routes/routes";
import AlertPartial from "../partials/AlertPartial";
import { validateNewPassSchema } from "../validation/ClientValidation";

const UserPanelComponent = ({ fName }) => {
  const [clientInputs, setClientInputs] = useState({
    password: "",
    repeatPassword: "",
  });
  const [errMessage, setErrMessage] = useState(null);

  const handleUserInputsChange = (ev) => {
    const newClientInputs = { ...clientInputs };
    newClientInputs[ev.target.id] = ev.target.value;
    setClientInputs(newClientInputs);
  };

  const navigate = useNavigate();

  const handleViewFavoriteClick = () => {
    navigate(ROUTES.FAVORITES);
  };
  //TODO fix reset password
  const handleResetPasswordClick = async (ev) => {
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
    <Fragment>
      <button
        className="btn btn-light d-xl-none fs-3 text-uppercase"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        {fName}'s Menu
      </button>

      <div
        className="offcanvas-xl offcanvas-end bg-light"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-center">
          <p className="fs-3 text-uppercase">{fName}'s Menu</p>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <button
              type="button"
              className="col-5 btn btn-outline-secondary me-3"
            >
              Reset Password
            </button>
            <button
              type="button"
              className="col-5 btn btn-outline-secondary ms-3"
              onClick={handleViewFavoriteClick}
            >
              View Favorites
            </button>
            <button
              type="button"
              className="col btn btn-outline-secondary m-2 disabled"
            >
              My Orders
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UserPanelComponent;
