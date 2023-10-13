import { elements } from "../document/elements.js";
import {
  clearAllMessages,
  clearErrorMessages,
} from "../utils/clearMessages.js";

elements.selectBtnProfession.addEventListener("click", () => {
  clearAllMessages();
  elements.optionMenuProfession.classList.toggle("active");
  clearErrorMessages(elements.sliderErrorProfession);
});

elements.optionsProfession.forEach((option) => {
  option.addEventListener("click", () => {
    clearAllMessages();
    elements.selectInputProfession.innerText = option.textContent.trim();

    elements.optionMenuProfession.classList.remove("active");
  });
});

elements.selectBtnAge.addEventListener("click", () => {
  clearAllMessages();
  elements.optionMenuAge.classList.toggle("active");
});

elements.optionsAge.forEach((option) => {
  option.addEventListener("click", () => {
    clearAllMessages();
    elements.selectInputAge.innerText = option.textContent.trim();

    elements.optionMenuAge.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (
    !elements.optionMenuProfession.contains(target) &&
    !elements.selectInputProfession.contains(target)
  ) {
    elements.optionMenuProfession.classList.remove("active");
  }

  if (
    !elements.optionMenuAge.contains(target) &&
    !elements.selectInputAge.contains(target)
  ) {
    elements.optionMenuAge.classList.remove("active");
  }
});
