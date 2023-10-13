import { elements } from "../document/elements.js";

export const clearErrorMessages = (element) => {
  if (element.hidden) {
    return;
  }

  element.innerHTML = "";
  element.hidden = true;
};

export const clearHeaderTimeOutMessages = () => {
  setTimeout(() => {
    clearErrorMessages(elements.headerErrorMessages);
    clearErrorMessages(elements.headerSuccessMessage);
  }, 2000);
};

export const clearAllMessages = () => {
  elements.sliderErorrs.forEach((element) => {
    clearErrorMessages(element);
  });
};
