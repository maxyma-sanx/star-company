import { errorAPI } from "../api/errorAPI.js";
import { elements } from "../document/elements.js";
import { addErrors } from "../utils/addErrors.js";
import {
  clearErrorMessages,
  clearHeaderTimeOutMessages,
} from "../utils/clearMessages.js";
import { createErrorElement } from "../utils/createErrorElement.js";
import { validateEmail } from "../validate/validateEmail.js";
import { validatePassword } from "../validate/validatePassword.js";

elements.headerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  clearErrorMessages(elements.headerErrorMessages);
  clearErrorMessages(elements.headerSuccessMessage);

  const api = new errorAPI();
  const errorMessages = [];
  const email = elements.headerEmail.value;
  const password = elements.headerPassword.value;

  try {
    const data = await api.fetchError();

    if (!validateEmail(email)) {
      addErrors("email", data.errors, errorMessages);
    }

    if (!validatePassword(password)) {
      addErrors("password", data.errors, errorMessages);
    }

    if (errorMessages.length > 0) {
      throw { message: errorMessages.join("\n\n") };
    }

    createErrorElement(elements.headerSuccessMessage, "Success");
    clearHeaderTimeOutMessages();
  } catch (error) {
    createErrorElement(elements.headerErrorMessages, error.message);
    clearHeaderTimeOutMessages();
  } finally {
    elements.headerForm.reset();
  }
});

elements.headerEmail.addEventListener("input", () => {
  clearErrorMessages(elements.headerErrorMessages);
  clearErrorMessages(elements.headerSuccessMessage);
});
elements.headerPassword.addEventListener("input", () => {
  clearErrorMessages(elements.headerErrorMessages);
  clearErrorMessages(elements.headerSuccessMessage);
});
