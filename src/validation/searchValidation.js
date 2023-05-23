import Joi from "joi";

import validate from "./validate";

const searchSchema = Joi.object({
  id: Joi.string().min(2).max(255).required(),
});

const validateSearchSchema = (userInputs) => validate(searchSchema, userInputs);

export { validateSearchSchema };
