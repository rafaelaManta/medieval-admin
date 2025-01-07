export const extractErrorToSting = (errorMessages = {}) => {
  return Object?.values(errorMessages)?.flat()?.join("");
};

export const matchApiDataWithFields = (
  formFields: object[],
  currentField: object[],
) => {
  return formFields?.map((field) => {
    return {
      ...field,
      value: currentField[field.name],
      id: currentField.id,
    };
  });
};
