import { elements } from "./elements.js";
import { clearAllMessages } from "../utils/clearMessages.js";
import {
  displayErrorMessage,
  slideValidators,
  validatePasswordSlide,
} from "../utils/slideValidators.js";
import { createErrorElement } from "../utils/createErrorElement.js";

let currentIndex = 0;

const updateSliderNext = () => {
  if (currentIndex === elements.slides.length - 1) {
    elements.nextSlide.hidden = true;
    elements.finalSlide.hidden = false;
  }

  elements.slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
      slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    } else {
      slide.classList.remove("active");
      slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    }
  });

  elements.points.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("point");
    }
  });
};

const updateSliderPrev = () => {
  if (currentIndex !== elements.slides.length - 1) {
    elements.nextSlide.hidden = false;
    elements.finalSlide.hidden = true;
  }

  elements.slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
      slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    } else {
      slide.classList.remove("active");
      slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    }
  });

  elements.points.forEach((slide, index) => {
    if (index === currentIndex + 1) {
      slide.classList.remove("point");
    }
  });
};

elements.nextSlide.addEventListener("click", async () => {
  clearAllMessages();

  if (currentIndex < elements.slides.length - 1) {
    const validationMessage = slideValidators[currentIndex]();

    if (validationMessage) {
      displayErrorMessage(validationMessage, currentIndex);
    } else {
      currentIndex += 1;
      updateSliderNext();
    }
  }
});

elements.prevSlide.addEventListener("click", () => {
  clearAllMessages();

  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSliderPrev();
  }
});

elements.finalSlide.addEventListener("click", () => {
  clearAllMessages();
  elements.sliderForm.dispatchEvent(new Event("submit"));
});

elements.sliderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearAllMessages();

  const validationMessage = validatePasswordSlide();

  if (validationMessage) {
    displayErrorMessage(validationMessage, currentIndex);
  } else {
    createErrorElement(elements.sliderSuccessMessage, "Success");
    setTimeout(() => {
      elements.sliderForm.reset();
      currentIndex = 0;
      elements.points.forEach((slide, index) => {
        if (index !== currentIndex) {
          slide.classList.remove("point");
        }
      });
      updateSliderPrev();
    }, 1000);
  }
});
