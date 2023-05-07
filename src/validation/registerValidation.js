import Joi from "joi";

import validate from "./validate";

const registerSchema = Joi.object({
  nameInput: Joi.string().trim().min(2).max(250).required(),
  emailInput: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(250)
    .trim()
    .required(),
  passwordInput: Joi.string()
    .pattern(
      new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
    )
    .min(8)
    .max(255)
    .required(),
});

const validateRegisterSchema = (userInputs) =>
  validate(registerSchema, userInputs);

export default validateRegisterSchema;
