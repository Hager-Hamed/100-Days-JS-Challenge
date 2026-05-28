// Caching DOM Element
const clockHours = window.document.querySelector('.clock-hours');
const clockMins = window.document.querySelector('.clock-mins');
const clockSecs = window.document.querySelector('.clock-secs');
const clockMode12 = window.document.querySelector('.clock-mode12');

function calcTime() {
	const currentDate = new Date();

	const hours = currentDate.getHours();
	const mins = currentDate.getMinutes();
	const secs = currentDate.getSeconds();

	displaytime(hours, mins, secs);
}

function displaytime(hours, mins, secs) {
	const hoursMode12 = hours > 12 ? hours - 12 : hours;
	const clockMode = hours >= 12 ? 'PM' : 'AM';

	// console.log(hours);
	// console.log(hoursMode12);

	// console.log(currentDate);

	clockHours.textContent = `${hoursMode12}`.padStart(2, '0');
	// clockHours.textContent =
	// 	hoursMode12 < 10 ? `0${hoursMode12}` : `${hoursMode12}`;
	clockMins.textContent = `${mins}`.padStart(2, '0');
	clockSecs.textContent = `${secs}`.padStart(2, '0');
	clockMode12.textContent = clockMode;
}

// function display() {
// 	console.log('time out');
// }

const timerId = window.setInterval(calcTime, 1000);

// calcTime();

// window.setTimeout(function () {
// 	console.log('time out');
// }, 3000);

// const timerId = window.setInterval(function () {
// 	console.log('time out');
// }, 3000);

// window.clearInterval(timerId);

// console.log(clockHours);
// console.log(clockMins);
// console.log(clockSecs);
// console.log(clockMode12);

// clock-hours
// clock-mins
// clock-secs
// clock-mode12
