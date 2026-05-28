// #region Start   Countdown Timer functionality
// Caching the needed Dom Elements

const daysEl = window.document.querySelector('.days');
const hoursEl = window.document.querySelector('.hours');
const minutesEl = window.document.querySelector('.minutes');
const secondsEl = window.document.querySelector('.seconds');
const timerMessageEl = window.document.querySelector('.timer-message');

// Set the date we're counting down to
const countDownDate = new Date('August 23, 2023 21:58:25');
// const countDownDate = new Date(2023, 7, 24, 18, 37, 25);

const timerId = window.setInterval(calcDiff, 1000);

function calcDiff() {
	const currentDate = new Date();

	const diffTS = countDownDate.getTime() - currentDate.getTime();
	// const diffTS = countDownDate - currentDate;
	// console.log(diffTS);

	const numDays = Math.floor(diffTS / (24 * 60 * 60 * 1000));
	// console.log(numDays);

	const numDaysReminder = diffTS % (24 * 60 * 60 * 1000);
	// console.log(numDays);

	const numHours = Math.floor(numDaysReminder / (60 * 60 * 1000));
	const numHoursReminder = numDaysReminder % (60 * 60 * 1000);

	const numMins = Math.floor(numHoursReminder / (60 * 1000));
	const numMinsReminder = numHoursReminder % (60 * 1000);

	const numSecs = Math.floor(numMinsReminder / 1000);

	if (diffTS <= 0) {
		window.clearInterval(timerId);
		setMessage('Date  is outdated', 'error');
	} else {
		rednderTime(numDays, numHours, numMins, numSecs);
		setMessage('timer is running...');
	}
}

function setMessage(message, status = 'success') {
	timerMessageEl.textContent = message;
	if (status === 'success') {
		timerMessageEl.classList.remove('error');
	} else {
		timerMessageEl.classList.add('error');
	}
}

function rednderTime(numDays, numHours, numMins, numSecs) {
	daysEl.textContent = `${numDays}`.padStart(3, '0');
	hoursEl.textContent = `${numHours}`.padStart(2, '0');
	minutesEl.textContent = `${numMins}`.padStart(2, '0');
	secondsEl.textContent = numSecs < 10 ? '0' + String(numSecs) : numSecs;
	// secondsEl.textContent = `${numSecs}`.padStart(2, '0');
}

// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion
