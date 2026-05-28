// #region Start   Tabs Component functionality
// Caching the needed Dom Elements
const tabsControlBtns = window.document.querySelectorAll('.tabs__control__btn');
const tabsContentItems = window.document.querySelectorAll(
	'.tabs__content__item'
);

// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion
