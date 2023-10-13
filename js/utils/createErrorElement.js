export const createErrorElement = (tag, text) => {
  tag.hidden = false;

  const element = document.createElement("p");
  element.innerText = text;
  tag.appendChild(element);
};
