import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routes";

const AdminPanelComponent = ({ fName }) => {
  const navigate = useNavigate();

  const handleAddClick = () => {
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
            <button
              type="button"
              className="col-5 btn btn-outline-secondary me-3"
            >
              Unblock Client
            </button>
            <button
              type="button"
              className="col-5 btn btn-outline-secondary ms-3"
            >
              Delete Client
            </button>
            <button
              type="button"
              className="col btn btn-outline-secondary m-2"
              onClick={handleAddClick}
            >
              Add New Product
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AdminPanelComponent;
