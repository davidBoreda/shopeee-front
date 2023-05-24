import Joi from "joi";

import validate from "./validate";

const addClientSchema = Joi.object({
  fName: Joi.string().trim().min(2).max(250).required(),
  lName: Joi.string().trim().min(2).max(250).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(250)
    .trim()
    .required(),
  isAdmin: Joi.boolean(),
  vipClient: Joi.boolean(),
  password: Joi.string()
    .pattern(
      new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
    )
    .min(8)
    .max(255)
    .required()
    .messages({
      "string.pattern.base": "follow password rules",
    }),
  age: Joi.number(),
  clientAddress: {
    city: Joi.string().min(3).max(255).trim().required(),
    street: Joi.string().min(3).max(255).trim().required(),
    houseNum: Joi.number().min(0).required(),
  },
});

const validateAddClientSchema = (userInputs) =>
  validate(addClientSchema, userInputs);

export default validateAddClientSchema;
