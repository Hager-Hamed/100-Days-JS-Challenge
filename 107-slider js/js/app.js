const next_btn = document.querySelector(".slider__right");
const prev_btn = document.querySelector(".slider__left");
const slides = document.querySelectorAll(".slider__img");
let paginationButtons;
const paginationContainer = document.querySelector(".slider__pagination");
const currCounter = document.querySelector('.current-counter');
const totalCounter = document.querySelector('.total-counter');

let currSlide = 0;

//swiperjs
//owl carousel
//splide

setup();
addEventsToButtons();

function addEventsToButtons() {
  next_btn.addEventListener("click", () => {
    removeActive(currSlide);
    incrementCounter();
    addActive(currSlide);
  });

  prev_btn.addEventListener("click", () => {
    removeActive(currSlide);
    decrementCounter();
    addActive(currSlide);
  });

  paginationButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      removeActive(currSlide);
      currSlide = index;
      addActive(currSlide);
    });
  });
}

function setup() {
  for (let i = 1; i <= slides.length; i++) {
    paginationContainer.innerHTML += `<div class="slider__pagination-item"></div>`;
  }
  paginationButtons = document.querySelectorAll(".slider__pagination-item");
  totalCounter.innerHTML = slides.length;
  addActive(currSlide);
}

function removeActive(slide) {
  slides[slide].classList.remove("slider__img--active");
  paginationButtons[slide].classList.remove("slider__pagination-item--active");
}

function addActive(slide) {
  slides[slide].classList.add("slider__img--active");
  paginationButtons[slide].classList.add("slider__pagination-item--active");
  currCounter.innerHTML = slide + 1;
}

function incrementCounter() {
  currSlide = currSlide + 1;
  if (currSlide == slides.length) {
    currSlide = 0;
  }
}

function decrementCounter() {
  currSlide = currSlide - 1;
  if (currSlide == -1) {
    currSlide = slides.length - 1;
  }
}