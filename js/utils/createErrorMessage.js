export const createErrorMessage = (value, data) => {
  return (
    data.find((item) => item.name === `${value}`).message ||
    `Something weng wrong width: ${value}`
  );
};
