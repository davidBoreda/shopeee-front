import { Fragment } from "react";
import ButtonPartial from "../partials/ButtonPartial";

const ContactUsPage = () => {
  return (
    <Fragment>
      <h1>Contact Us</h1>
      <hr />

      <label htmlFor="emailInput">email</label>
      <br />
      <input type="email" />
      <br />
      <br />
      <label htmlFor="appealInput">Your appeal</label>
      <br />
      <input type="text" />
      <br />
      <ButtonPartial>Submit</ButtonPartial>
    </Fragment>
  );
};

export default ContactUsPage;
