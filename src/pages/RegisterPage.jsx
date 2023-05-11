import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userInputs, setUserInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    age: "",
    clientAddress: {
      city: "",
      street: "",
      houseNum: "",
    },
  });

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
    console.log(userInputs);
    try {
      await axios.post("/client/register", {
        fName: userInputs.fName,
        lName: userInputs.lName,
        email: userInputs.email,
        password: userInputs.password,
        age: userInputs.age,
        clientAddress: {
          city: userInputs.clientAddress.city,
          street: userInputs.clientAddress.street,
          houseNum: userInputs.clientAddress.houseNum,
        },
      });

      navigate("/loginpage");
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          <input
            type="text"
            placeholder="street"
            className="form-control"
            id="clientAddress.street"
            aria-describedby="addressHelp"
            value={userInputs.clientAddress.street}
            onChange={handleUserInputsChange}
          />
          <input
            type="number"
            placeholder="House Number"
            className="form-control"
            id="clientAddress.houseNum"
            aria-describedby="addressHelp"
            value={userInputs.clientAddress.houseNum}
            onChange={handleUserInputsChange}
          />
        </div>
      </div>
      <span className="fs-1 fw-bold float-end">Shopeee</span>
      <button className="btn btn-primary" type="submit">
        Register Here
      </button>
    </form>
  );
};
export default RegisterPage;
