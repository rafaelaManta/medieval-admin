export const extractErrorToSting = (errorMessages = {}) => {
  return Object?.values(errorMessages)?.flat()?.join("");
};
