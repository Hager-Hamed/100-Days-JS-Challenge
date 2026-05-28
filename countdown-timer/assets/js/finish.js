// #region Start   Countdown Timer functionality
// Caching the needed Dom Elements

const daysEl = window.document.querySelector('.days');
const hoursEl = window.document.querySelector('.hours');
const minutesEl = window.document.querySelector('.minutes');
const secondsEl = window.document.querySelector('.seconds');
const timerMessageEl = window.document.querySelector('.timer-message');

// Set the date we're counting down to
const countDownDate = new Date('June 30, 2023 0:37:25').getTime();
// const countDownDate = new Date('dec 5, 2020 15:37:25').getTime();

// Update the count down every 1 second
const x = window.setInterval(calculateRemainTime, 1000);

function calculateRemainTime() {
	// Get today's date and time
	const now = new Date().getTime();

	// Find the distance between now and the count down date
	const diff = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const daysRemainder = Math.floor(diff % (1000 * 60 * 60 * 24));

	const hours = Math.floor(daysRemainder / (1000 * 60 * 60));
	const hoursRemainder = Math.floor(daysRemainder % (1000 * 60 * 60));

	const minutes = Math.floor(hoursRemainder / (1000 * 60));
	const minutesRemainder = Math.floor(hoursRemainder % (1000 * 60));

	const seconds = Math.floor(minutesRemainder / 1000);

	// If the count down is finished, write some text
	if (diff < 0) {
		clearInterval(x);
		setMesage('Timer is expired Now!!!', false);
	} else {
		renderTime(days, hours, minutes, seconds);
	}
}

function renderTime(days, hours, minutes, seconds) {
	daysEl.textContent = `${days}`.padStart(2, '0');
	hoursEl.textContent = `${hours}`.padStart(2, '0');
	minutesEl.textContent = `${minutes}`.padStart(2, '0');
	secondsEl.textContent = `${seconds}`.padStart(2, '0');
	setMesage('Countdown is running...', true);
}

function setMesage(message, isSuccess = true) {
	timerMessageEl.textContent = message;
	if (isSuccess) {
		timerMessageEl.classList.remove('error');
	} else {
		timerMessageEl.classList.add('error');
	}
}

// const datetime = window.document.querySelector('.datetime');

// datetime.addEventListener('change', () => {
// 	console.log(datetime.value);
// 	const d = new Date(datetime.value);
// 	console.log(d);
// });

// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion
