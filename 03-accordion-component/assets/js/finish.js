// #region Start  Accordion functionality
// Caching the needed Dom Elements
let accordionBtnsList = window.document.querySelectorAll('.accordion__button');

console.log(accordionBtnsList);

accordionBtnsList.forEach((btn) => {
	btn.addEventListener('click', () => {
		const targetAcoordionItem = btn.closest('.accordion__item');
		// const targetAcoordionItem = btn.parentElement.parentElement;

		targetAcoordionItem.classList.toggle('open');

		console.log(targetAcoordionItem);
	});
});
// #endregion

// #region Start  Accordion functionality seperated closed Accordion functionality seperated closed
// Caching the needed Dom Elements
// let accordionBtnsList = window.document.querySelectorAll('.accordion__button');
// let accordionItems = window.document.querySelectorAll('.accordion__item');

// console.log(accordionBtnsList);

// accordionBtnsList.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		const currenItem = btn.parentElement.parentElement;

// 		accordionItems.forEach((item) => {
// 			if (item === currenItem) {
// 				item.classList.toggle('open');
// 			} else {
// 				item.classList.remove('open');
// 			}
// 		});

// 		console.log();
// 	});
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
