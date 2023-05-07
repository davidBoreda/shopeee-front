const validate = (schema, userInput) =>
  schema.validate(userInput, { abortEarly: false });
export default validate;
