import Joi from "joi";

import validate from "./validate";

const newProductSchema = Joi.object({
  name: Joi.string().min(3).max(255),
  brand: Joi.string().min(2).max(255),
  description: Joi.string().min(3).max(255),
  stockQuant: Joi.number(),
  picture: Joi.string().trim(),
  price: Joi.number(),
});

const validateNewProductSchema = (userInputs) =>
  validate(newProductSchema, userInputs);

export { validateNewProductSchema };
