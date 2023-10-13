import { elements } from "../document/elements.js";
import { clearAllMessages } from "../utils/clearMessages.js";

elements.selectInputPlace.addEventListener("input", () => {
  clearAllMessages();
});

elements.selectInputEmail.addEventListener("input", () => {
  clearAllMessages();
});

elements.selectInputPassword.addEventListener("input", () => {
  clearAllMessages();
});
