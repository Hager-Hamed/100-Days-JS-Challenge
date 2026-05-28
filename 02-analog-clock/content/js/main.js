//#region Analog Clock
// Caching the needed Dom Elements
const hourHand = document.querySelector('.hour');
const minsHand = document.querySelector('.min');
const secsHand = document.querySelector('.sec');

function calcTime() {
	const currentDate = new Date();

	const hours = currentDate.getHours();
	const mins = currentDate.getMinutes();
	const secs = currentDate.getSeconds();

	displaytime(hours, mins, secs);
}

function displaytime(hours, mins, secs) {
	const hoursMode12 = hours > 12 ? hours - 12 : hours;

	const hoursDegree = (360 / 12) * hoursMode12;
	const minsDegree = (360 / 60) * mins;
	// const hoursDegree = (360 / 12) * (hoursMode12 + mins / 60);
	// const minsDegree = (360 / 60) * (mins + secs / 60);
	const secDegree = (360 / 60) * secs;

	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
	minsHand.style.transform = `rotate(${minsDegree}deg)`;
	secsHand.style.transform = `rotate(${secDegree}deg)`;
}

window.setInterval(calcTime, 1000);

// function display() {
// 	console.log('time out');
// }

// const timerId = window.setInterval(calcTime, 1000);

// https://dev.to/nepalilab/create-an-analog-clock-with-vanilla-javascript-for-beginners-3ibb
// https://codepen.io/CHUN-PIN-CHEN/pen/yVRBEw

// https://codeorum.com/tutorials/modern-minimalistic-flat-analog-clock-with-css-js-and-startup-animation
// https://codepen.io/codeorum/embed/VwaLzqW?default-tab=result&theme-id=light
//#endregion

// const copyRightYear = window.document.querySelector('.current-year');

// copyRightYear.textContent = new Date().getFullYear();

//#region   Auto update Current year functionality
// Caching the needed Dom Elements
// const currentYearElements = window.document.querySelectorAll('.current-year');
// const currentYear = new Date().getFullYear();

// // auto update Current year functionality
// currentYearElements.forEach((ele) => {
// 	ele.textContent = currentYear;
// });
//#endregion
