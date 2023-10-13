import { elements } from "../document/elements.js";
import { validateProfession } from "../validate/validateProfession.js";
import { validateAge } from "../validate/validateAge.js";
import { errorAPI } from "../api/errorAPI.js";
import { createErrorElement } from "./createErrorElement.js";
import { validatePlace } from "../validate/validatePlace.js";
import { validateEmail } from "../validate/validateEmail.js";
import { validatePassword } from "../validate/validatePassword.js";

const api = new errorAPI();
const data = await api.fetchError();

const validateProfessionSlide = () => {
  const value = elements.selectInputProfession.textContent.trim();

  if (!validateProfession(value)) {
    return "Please select a profession";
  }
};

const validateAgeSlide = () => {
  const value = elements.selectInputAge.textContent.trim();

  if (!validateAge(value)) {
    const errorMessage =
      data.errors.find((item) => item.name === "age").message ||
      "Something went wrong with age";

    return errorMessage;
  }
};

const validatePlaceSlide = () => {
  const value = elements.selectInputPlace.value.trim();

  if (!validatePlace(value)) {
    const errorMessage =
      data.errors.find((item) => item.name === "location").message ||
      "Something went wrong with location";

    return errorMessage;
  }
};

const validateEmailSlide = () => {
  const value = elements.selectInputEmail.value.trim();

  if (!validateEmail(value)) {
    const errorMessage =
      data.errors.find((item) => item.name === "email").message ||
      "Something went wrong with email";

    return errorMessage;
  }
};

export const validatePasswordSlide = () => {
  const value = elements.selectInputPassword.value.trim();

  if (!validatePassword(value)) {
    const errorMessage =
      data.errors.find((item) => item.name === "password").message ||
      "Something went wrong with password";

    return errorMessage;
  }
};

export const displayErrorMessage = (errorMessage, index) => {
  if (index === 0) {
    createErrorElement(elements.sliderErrorProfession, errorMessage);
  }

  if (index === 1) {
    createErrorElement(elements.sliderErrorAge, errorMessage);
  }

  if (index === 2) {
    createErrorElement(elements.sliderErrorPlace, errorMessage);
  }

  if (index === 3) {
    createErrorElement(elements.sliderErrorEmail, errorMessage);
  }

  if (index === 4) {
    createErrorElement(elements.sliderErrorPassword, errorMessage);
  }
};

export const slideValidators = [
  validateProfessionSlide,
  validateAgeSlide,
  validatePlaceSlide,
  validateEmailSlide,
  validatePasswordSlide,
];
