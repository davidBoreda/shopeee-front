import Joi from "joi";

import validate from "./validate";

const idSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const editCardSchema = Joi.object({
  _id: Joi.string().hex().length(24),
  name: Joi.string().min(3).max(255),
  brand: Joi.string().min(2).max(255),
  description: Joi.string().min(3).max(255),
  stockQuant: Joi.number(),
  price: Joi.number(),
});

const validateIdSchema = (userInputs) => validate(idSchema, userInputs);
const validateEditCardSchema = (userInputs) =>
  validate(editCardSchema, userInputs);

export { validateIdSchema, validateEditCardSchema };
