// #endregion Accordion functionality
let accordionBtnsList = window.document.querySelectorAll('.accordion__button');

console.log(accordionBtnsList);

accordionBtnsList.forEach((btn) => {
	btn.addEventListener('click', () => {
		const accordionItem = btn.closest('.accordion__item');

		// const accordionItem = btn.parentElement.parentElement;

		accordionItem.classList.toggle('open');

		console.log(accordionItem);
	});
});

// #endregion

// #region Start  Accordion functionality seperated closed
// Caching the needed Dom Elements
// let accordionBtnsList = window.document.querySelectorAll('.accordion__button');
// let accordionItemList = window.document.querySelectorAll('.accordion__item');

// console.log(accordionBtnsList);

// accordionBtnsList.forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		const accordionItem = btn.closest('.accordion__item');

// 		console.log('clicked');

// 		accordionItemList.forEach((item) => {
// 			if (item === accordionItem) {
// 				// console.log('my item');
// 				item.classList.toggle('open');
// 			} else {
// 				// console.log('other item');
// 				item.classList.remove('open');
// 			}
// 		});

// 		// const accordionItem = btn.parentElement.parentElement;

// 		// accordionItem.classList.toggle('open');

// 		// console.log(accordionItem);
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
