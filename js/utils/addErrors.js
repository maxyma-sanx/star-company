export const addErrors = (value, data, errors) => {
  const errorText =
    data.find((item) => item.name === `${value}`).message ||
    `Something weng wrong width: ${value}`;
  errors.push(errorText);
};
