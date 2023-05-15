const validate = (schema, userInput) => {
  const { error } = schema.validate(userInput, { abortEarly: false });
  if (error) {
    let errorObj = {};
    for (let item of error.details) {
      if (!errorObj[item.context.key]) {
        errorObj[item.context.key] = [];
      }
      errorObj[item.context.key] = [
        ...errorObj[item.context.key],
        item.message,
      ];
    }
    return errorObj;
  } else {
    return null;
  }
};

export default validate;

// const validate = (schema, userInput) => {
//   const { error } = schema.validate(userInput, { abortEarly: false });
//   if (error) {
//     let errorObj = {};
//     for (let item of error.details) {
//       if (!errorObj[item.context.key]) {
//         errorObj[item.context.key] = [];
//       }
//       errorObj[item.context.key] = JSON.parse(
//         JSON.stringify(errorObj[item.context.key])
//       );
//       errorObj[item.context.key].push(item.message);
//     }
//     return errorObj;
//   } else {
//     return null;
//   }
// };

// export default validate;
