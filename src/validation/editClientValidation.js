import Joi from "joi";

import validate from "./validate";

const editClientSchema = Joi.object({
  fName: Joi.string().trim().min(2).max(250).required(),
  lName: Joi.string().trim().min(2).max(250).required(),
  age: Joi.number(),
  picture: Joi.string().trim(),
  clientAddress: {
    city: Joi.string().min(3).max(255).trim().required(),
    street: Joi.string().min(3).max(255).trim().required(),
    houseNum: Joi.number().min(0).required(),
  },
});

const editClientValidation = (userInputs) =>
  validate(editClientSchema, userInputs);

export default editClientValidation;
