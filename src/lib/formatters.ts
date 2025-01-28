import { ApiError } from "@/lib/types";

export const extractErrorToSting = (errorMessages = {}) => {
  return Object?.values(errorMessages)?.flat()?.join("");
};

export const matchApiDataWithFields = (
  formFields: object[],
  currentField: object,
) => {
  return formFields?.map((field) => {
    return {
      ...field,
      value: currentField[field.name],
      id: currentField.id,
    };
  });
};

export const areAllStatusesSame = (
  errorsArray: (ApiError | undefined)[],
): boolean => {
  if (!errorsArray) {
    return false;
  }
  if (errorsArray.length === 0) {
    return false;
  }
  const firstStatus = errorsArray[0]?.status;
  return errorsArray.every((error) => error?.status === firstStatus);
};
