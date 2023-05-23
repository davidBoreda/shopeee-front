import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateAddClientSchema from "../validation/addClientValidation";
import AlertPartial from "../partials/AlertPartial";
import ROUTES from "../routes/routes";

const AddNewClient = () => {
  const [userInputs, setUserInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    age: "",
    isAdmin: false,
    clientAddress: {
      city: "",
      street: "",
      houseNum: "",
    },
  });

  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();

  const handleUserInputsChange = (ev) => {
    let newUserInputs = { ...userInputs };

    if (ev.target.type === "checkbox") {
      newUserInputs.isAdmin = ev.target.checked;
    } else if (ev.target.id.startsWith("clientAddress")) {
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
      const errors = validateAddClientSchema(userInputs);
      if (errors) {
        console.log(errors);
        setErrMessage(errors);
      } else {
        const response = await axios.post("/client/addclient", {
          fName: userInputs.fName,
          lName: userInputs.lName,
          email: userInputs.email,
          isAdmin: userInputs.isAdmin,
          password: userInputs.password,
          age: userInputs.age,
          clientAddress: {
            city: userInputs.clientAddress.city,
            street: userInputs.clientAddress.street,
            houseNum: userInputs.clientAddress.houseNum,
          },
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

        navigate(ROUTES.PROFILE);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="" action="" onSubmit={handleSubmit}>
      <div className="row row-clos-1 row-cols-md-3 g-4">
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
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={userInputs.email}
            onChange={handleUserInputsChange}
          />
          {errMessage && errMessage.email && (
            <AlertPartial>{errMessage.email}</AlertPartial>
          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="isAdmin"
            value={userInputs.isAdmin}
            onChange={handleUserInputsChange}
          />
          <label className="form-check-label" htmlFor="isAdminInput">
            Admin
          </label>
          {errMessage && errMessage.email && (
            <AlertPartial>{errMessage.email}</AlertPartial>
          )}
        </div>

        <div className="mb-1">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            value={userInputs.password}
            onChange={handleUserInputsChange}
          />
          {errMessage && errMessage.password && (
            <AlertPartial>
              {errMessage.password.map((item) => (
                <div key={item + Date.now()}>{item}</div>
              ))}
            </AlertPartial>
          )}
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
        Register Here
      </button>
    </form>
  );
};

export default AddNewClient;
