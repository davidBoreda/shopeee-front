import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import ROUTES from "../routes/routes";
import AlertPartial from "../partials/AlertPartial";
import { validateEmailSchema } from "../validation/ClientValidation";

const AdminPanelComponent = ({ fName }) => {
  const [clientInputs, setClientInputs] = useState({ email: "" });
  const [errMessage, setErrMessage] = useState(null);

  const handleUserInputsChange = (ev) => {
    const newClientInputs = { ...clientInputs };
    newClientInputs[ev.target.id] = ev.target.value;
    setClientInputs(newClientInputs);
  };

  const navigate = useNavigate();

  const handleUnblockClientClick = async (ev) => {
    ev.preventDefault();
    try {
      const errors = validateEmailSchema(clientInputs);
      if (errors) {
        console.log(errors);
        setErrMessage(errors);
      } else {
        const response = await axios.patch("/client/unblock", {
          email: clientInputs.email,
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

  const handleDeleteClientClick = () => {
    // console.log("clicked delete");
  };

  const handleNewClientClick = () => {
    navigate(ROUTES.ADDCLIENT);
  };

  const handleAddProductClick = () => {
    navigate(ROUTES.ADDPRODUCT);
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
        Admin Operations
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
          <p className="fs-3 text-uppercase">Admin Operations</p>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <p className="fs-6 d-flex justify-content-center">Clients</p>
            <div className="border-top d-flex justify-content-center">
              {/* Button trigger modal */}
              <button
                type="button"
                className="col btn btn-outline-secondary m-1 "
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Unblock
              </button>
              {/* modal */}
              <form onSubmit={handleUnblockClientClick}>
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Unblock Client
                        </h1>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-1">
                          <label htmlFor="emailInput" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={clientInputs.email}
                            onChange={handleUserInputsChange}
                          />
                          {errMessage && errMessage.email && (
                            <AlertPartial>{errMessage.email}</AlertPartial>
                          )}
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Unblock
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <button
                type="button"
                className="col btn btn-outline-secondary m-1 disabled"
                onClick={handleDeleteClientClick}
              >
                Delete
              </button>
              <button
                type="button"
                className="col btn btn-outline-secondary m-1"
                onClick={handleNewClientClick}
              >
                New
              </button>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <p className="fs-6 d-flex justify-content-center">Products</p>
            <div className="border-top d-flex justify-content-center">
              <button
                type="button"
                className="col btn btn-outline-secondary m-2"
                onClick={handleAddProductClick}
              >
                New Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AdminPanelComponent;
