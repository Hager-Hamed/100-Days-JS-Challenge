// https://www.w3schools.com/howto/howto_css_switch.asp

// https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/

// #region Start  Accordion functionality
// Caching the needed Dom Elements
const switchInput = window.document.querySelector('.switch__input');
const themeText = window.document.querySelector('.theme__text');
const themeIcon = window.document.querySelector('.theme__icon');

const htmlEl = window.document.documentElement;


const theme = getThemeFromLocalStorage()
if (theme) {
  setTheme(theme);
} else {
  console.log('no theme in local storage');

  const isSystemModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(isSystemModeDark);

  const theme = isSystemModeDark ? 'dark' : 'light';
  setTheme(theme);
}



function setTheme(theme) {
  setThemeTolocalStorage(theme);

 if (theme === 'dark') {
		htmlEl.setAttribute('data-theme', 'dark');
		themeText.textContent = 'light mode';
   themeIcon.classList.replace('fa-moon', 'fa-sun');
   switchInput.checked = true;
  } else {
    htmlEl.setAttribute('data-theme', 'light');
		themeText.textContent = 'dark mode';
		themeIcon.classList.replace('fa-sun', 'fa-moon');
    switchInput.checked = false;
  }
}


switchInput.addEventListener("change", () => {
  const theme = switchInput.checked ? 'dark' : 'light';
  setTheme(theme);
})

function setThemeTolocalStorage(theme) {
	window.localStorage.setItem('theme', theme);
}

function getThemeFromLocalStorage() {
return window.localStorage.getItem('theme');
}

// setThemeTolocalStorage('light');

// const theme = getThemeFromLocalStorage()
// if (theme) {
//   console.log(theme);
// }



  // if (switchInput.checked) {

  //   htmlEl.setAttribute('data-theme', 'dark');
  //   themeText.textContent = "light mode"
  //   themeIcon.classList.replace("fa-moon",'fa-sun')

  // } else{
  //   htmlEl.setAttribute('data-theme','light');
  //   themeText.textContent = "dark mode"
  //   themeIcon.classList.replace("fa-sun",'fa-moon')

  // }


// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion

// step-1 => on change radio button ==> get button checked or not

// A) checked > dark Mode
// B ) unched > light Mode

// currentTheme -> 1. data - theme
//                 2. text
//                 3. icon

// save to local storage => currentheme

// step-2=>
// get currenttheme

// currentTheme -> 1. data - theme
//                 2. text
//                 3. icon
