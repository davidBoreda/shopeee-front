import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ROUTES from "../routes/routes";
import AlertPartial from "../partials/AlertPartial";
import editClientValidation from "../validation/editClientValidation";
import { authActions } from "../store/auth";
import UserPanelComponent from "../components/UserPanelComponent";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const clientInfo = useSelector((state) => state.authStore.clientInfo);
  console.log(clientInfo);
  const [userInputs, setUserInputs] = useState({
    fName: clientInfo.fName,
    lName: clientInfo.lName,
    age: clientInfo.age,
    clientAddress: {
      city: clientInfo.clientAddress.city,
      street: clientInfo.clientAddress.street,
      houseNum: clientInfo.clientAddress.houseNum,
    },
  });

  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const handleUserInputsChange = (ev) => {
    let newUserInputs = JSON.parse(JSON.stringify(userInputs));
    if (ev.target.id.startsWith("clientAddress")) {
      const [key, nestedKey] = ev.target.id.split(".");
      newUserInputs[key] = {
        ...newUserInputs[key],
        [nestedKey]: ev.target.value,
      };
    } else {
      newUserInputs[ev.target.id] = ev.target.value;
    }
    setUserInputs(newUserInputs);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const errors = editClientValidation(userInputs);
      if (errors) {
        console.log(errors);
        setErrMessage(errors);
      } else {
        await axios.put("/client/editclient", {
          fName: userInputs.fName,
          lName: userInputs.lName,
          age: userInputs.age,
          clientAddress: {
            city: userInputs.clientAddress.city,
            street: userInputs.clientAddress.street,
            houseNum: userInputs.clientAddress.houseNum,
          },
        });
        dispatch(authActions.login(userInputs));
        navigate(ROUTES.PROFILE);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row">
      <form className="col-9" action="" onSubmit={handleSubmit}>
        <div className="row row-clos-1 row-cols-md-4 g-4">
          <div className="col mb-1">
            <label htmlFor="fNameInput" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              value={userInputs.fName}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.fName && (
              <AlertPartial>{errMessage.fName}</AlertPartial>
            )}
          </div>
          <div className="col mb-1">
            <label htmlFor="lNameInput" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              value={userInputs.lName}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.lName && (
              <AlertPartial>{errMessage.lName}</AlertPartial>
            )}
          </div>
          <div className="mb-1">
            <label htmlFor="emailInput" className="form-label">
              Email Address
            </label>
            <div className="form-text">
              <p className="fs-5">{clientInfo.email}</p>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="ageInput" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              aria-describedby="ageHelp"
              value={userInputs.age}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.age && (
              <AlertPartial>{errMessage.age}</AlertPartial>
            )}
          </div>
        </div>
        <div className="row row-clos-1 row-cols-md-3 g-4">
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label">
              Address
            </label>
            <input
              type="text"
              placeholder="City"
              className="form-control "
              id="clientAddress.city"
              aria-describedby="addressHelp"
              value={userInputs.clientAddress.city}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.city && (
              <AlertPartial>{errMessage.city}</AlertPartial>
            )}
            <input
              type="text"
              placeholder="street"
              className="form-control"
              id="clientAddress.street"
              aria-describedby="addressHelp"
              value={userInputs.clientAddress.street}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.street && (
              <AlertPartial>{errMessage.street}</AlertPartial>
            )}
            <input
              type="number"
              placeholder="House Number"
              className="form-control"
              id="clientAddress.houseNum"
              aria-describedby="addressHelp"
              value={userInputs.clientAddress.houseNum}
              onChange={handleUserInputsChange}
            />
            {errMessage && errMessage.houseNum && (
              <AlertPartial>{errMessage.houseNum}</AlertPartial>
            )}
          </div>
        </div>

        <span className="fs-1 fw-bold float-end">Shopeee</span>
        <button className="btn btn-primary" type="submit">
          Save changes
        </button>
      </form>
      <div className="col-3">
        <UserPanelComponent fName={clientInfo.fName}></UserPanelComponent>
      </div>
    </div>
  );
};

export default ProfilePage;
