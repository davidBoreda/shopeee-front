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

const newPassSchema = Joi.object({
  password: Joi.string()
    .regex(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(3)
    .max(255)
    .required()
    .messages({
      "string.pattern.base": "follow password rules",
    }),
  repeatPassword: Joi.string()
    .regex(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(3)
    .max(255)
    .required()
    .messages({
      "string.pattern.base": "follow password rules",
    }),
});

const validateNewPassSchema = (userInput) => validate(userInput, newPassSchema);

const validateEmailSchema = (userInputs) => validate(emailSchema, userInputs);

export { validateEmailSchema, validateNewPassSchema };
