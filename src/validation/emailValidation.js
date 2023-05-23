import Joi from "joi";

import validate from "./validate";

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(250)
    .trim()
    .required(),
});

const validateEmailSchema = (userInputs) => validate(emailSchema, userInputs);

export default validateEmailSchema;
