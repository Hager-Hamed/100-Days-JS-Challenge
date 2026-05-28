//#region Analog Clock
// Caching the needed Dom Elements
const hourHand = document.querySelector('.hour');
const minsHand = document.querySelector('.min');
const secsHand = document.querySelector('.sec');

// Helper Function to access dom to display time
const DisplayTime = (hours, minutes, seconds) => {
	// Getting hour handle degree based on decimal hour value calculated

	const secsDegree = seconds * (360 / 60); // Getting second handle degree
	// const minsDegree = minutes * (360 / 60); // Getting minute handle degree
	const minsDegree = (minutes + seconds / 60) * (360 / 60); // Getting minute handle degree
	// const hoursDegree = hours * (360 / 12); // from current hour and curent minutes
	const hoursDegree = (hours + minutes / 60) * (360 / 12); // from current hour and curent minutes

	// Addint rotate attributes to handles
	secsHand.style.transform = `rotate(${secsDegree}deg)`;
	minsHand.style.transform = `rotate(${minsDegree}deg)`;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;
};

// Helper Function to calculate curent time.
const claculateTime = () => {
	const day = new Date();

	const hours = day.getHours();
	const minutes = day.getMinutes();
	const seconds = day.getSeconds();

	const hoursInMode12 = hours > 11 ? hours - 12 : hours;

	DisplayTime(hoursInMode12, minutes, seconds);
};

// create periodic timer to get current time every 1000 ms = 1s
// window.setInterval(claculateTime, 1000);

// https://dev.to/nepalilab/create-an-analog-clock-with-vanilla-javascript-for-beginners-3ibb
// https://codepen.io/CHUN-PIN-CHEN/pen/yVRBEw

// https://codeorum.com/tutorials/modern-minimalistic-flat-analog-clock-with-css-js-and-startup-animation
// https://codepen.io/codeorum/embed/VwaLzqW?default-tab=result&theme-id=light
//#endregion

//#region   Auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

// auto update Current year functionality
currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
//#endregion
