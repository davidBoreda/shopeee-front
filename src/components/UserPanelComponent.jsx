import { Fragment } from "react";

const UserPanelComponent = ({ fName }) => {
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
            >
              View Favorites
            </button>
            <button type="button" className="col btn btn-outline-secondary m-2">
              My Orders
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UserPanelComponent;
