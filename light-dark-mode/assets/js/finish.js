// https://www.w3schools.com/howto/howto_css_switch.asp
// https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/
// #region Start  Light & dark Mode functionality
// Caching the needed Dom Elements
const switchInput = window.document.querySelector('.switch__input');
const themeText = window.document.querySelector('.theme__text');
const themeIcon = window.document.querySelector('.theme__icon');
console.log(switchInput);

const currentTheme = getThemeFromLocalStorage() || 'light';
setTheme(currentTheme);

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);

	if (theme === 'dark') {
		themeText.textContent = 'Dark Mode';
		themeIcon.classList.replace('fa-sun', 'fa-moon');
		switchInput.checked = true;
	} else {
		themeText.textContent = 'Light Mode';
		themeIcon.classList.replace('fa-moon', 'fa-sun');
		switchInput.checked = false;
	}

	setThemeFromLocalStorage(theme);
}

function getThemeFromLocalStorage() {
	return window.localStorage.getItem('theme');
}

function setThemeFromLocalStorage(theme) {
	window.localStorage.setItem('theme', theme);
}

switchInput.addEventListener('change', (e) => {
	if (switchInput.checked) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
});

// #endregion


// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion
