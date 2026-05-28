// #region Start   Digital Clock functionality
// Caching the needed Dom Elements
const clockHours = window.document.querySelector(".clock-hours");
const clockMins = window.document.querySelector(".clock-mins");
const clockSecs = window.document.querySelector(".clock-secs");
const clockMode12 = window.document.querySelector(".clock-mode12");

function renderTime(hours, minutes, seconds) {
  const mode12 = hours > 11 ? "PM" : "AM";
  const hoursMode12 = hours > 12 ? hours - 12 : hours;
  // const hoursMode12  = hours > 9 ? hours : '0' + hours;
  clockHours.textContent = `${hoursMode12}`.padStart(2, "0");
  clockMins.textContent = `${minutes}`.padStart(2, "0");
  clockSecs.textContent = `${seconds}`.padStart(2, "0");
  clockMode12.textContent = mode12;
}

function calcTime() {
  const curentDate = new Date();

  const hours = curentDate.getHours();
  const minutes = curentDate.getMinutes();
  const seconds = curentDate.getSeconds();

  renderTime(hours, minutes, seconds);
  // console.log(hours, minutes, seconds);
}

window.setInterval(calcTime, 1000);
// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll(".current-year");
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
  ele.textContent = currentYear;
});
// #endregion
