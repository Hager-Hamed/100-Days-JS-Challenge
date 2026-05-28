// https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
// https://www.base64-image.de/
// https://developer.mozilla.org/en-US/docs/Web/CSS/filter

// #region Start  Image Filter App  functionality
// Caching the needed Dom Elements
let filterImage = window.document.querySelector('.preview-image');
let fileInput = window.document.querySelector('.file-input');
let filterForm = window.document.querySelector('.filter-form');
let filterSelect = window.document.querySelector('.filter-select');
let btnDl = window.document.querySelector('.btn-dl');

let filterMinValue = window.document.querySelector('.filter__min-value');
let filterMaxValue = window.document.querySelector('.filter__max-value');
let filterRange = window.document.querySelector('.filter__range');
let filterAdjust = window.document.querySelector('.filter__adjust');
let filterCurrentValue = window.document.querySelector(
	'.filter__current-value'
);

let filterType = null;
let current = null;

function setFilter() {
	if (filterType !== 'none') {
		filterAdjust.classList.remove('d-none');
	} else {
		filterAdjust.classList.add('d-none');
	}

	const { symbol, min, max, initial, step } = filters[filterType];
	filterMinValue.textContent = `${min}${symbol}`;
	filterMaxValue.textContent = `${max}${symbol}`;
	filterCurrentValue.textContent = `${initial}${symbol}`;

	filterRange.min = `${min}`;
	filterRange.max = `${max}`;
	filterRange.step = `${step}`;
	filterRange.value = `${initial}`;

	current = initial;
}

function applyFilter() {
	if (filterType !== 'none') {
		const symbol = filters[filterType].symbol;
		filterImage.style.filter = `${filterType}(${current}${symbol})`;
	} else {
		filterImage.removeAttribute('style');
	}
}

const filters = {
	none: {
		min: 0,
		max: 100,
		initial: 50,
		step: 5,
	},
	brightness: {
		symbol: '%',
		min: 0,
		max: 200,
		initial: 200,
		step: 5,
	},
	blur: {
		symbol: 'px',
		min: 0,
		max: 30,
		initial: 10,
		step: 1,
	},
	contrast: {
		symbol: '%',
		min: 0,
		max: 200,
		initial: 200,
		step: 5,
	},
	opacity: {
		symbol: '%',
		min: 0,
		max: 100,
		initial: 50,
		step: 5,
	},
	saturate: {
		symbol: '%',
		min: 0,
		max: 200,
		initial: 200,
		step: 5,
	},
	grayscale: {
		symbol: '%',
		min: 0,
		max: 100,
		initial: 100,
		step: 5,
	},
	invert: {
		symbol: '%',
		min: 0,
		max: 100,
		initial: 100,
		step: 5,
	},
};

fileInput.addEventListener('change', function (e) {
	console.log(fileInput.files);

	const file = e.target.files[0];
	const reader = new FileReader();

	if (file) {
		reader.readAsDataURL(file);
	}

	reader.onload = function () {
		const imageSrc = reader.result;
		filterImage.src = imageSrc;
	};
});

filterSelect.addEventListener('change', () => {
	filterType = filterSelect.value;
	setFilter();
	applyFilter();
});

filterRange.addEventListener('change', () => {
	current = `${filterRange.value}`;
	filterCurrentValue.textContent = `${current}${filters[filterType].symbol}`;
	applyFilter();
});

// function downloadImage() {
// 	const canvas = document.createElement('canvas');

// 	canvas.width = filterImage.width;
// 	canvas.height = filterImage.height;

// 	const context = canvas.getContext('2d');
// 	context.filter = getComputedStyle(filterImage).filter;
// 	context.drawImage(filterImage, 0, 0);

// 	const downloadLink = document.createElement('a');
// 	downloadLink.href = canvas.toDataURL('image/png');
// 	downloadLink.download = 'filtered_image.png';
// 	downloadLink.click();
// }

// btnDl.addEventListener('click', downloadImage);

// filterForm.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	console.log('submit');

// 	if (filterType === 'none') {
// 		filterImage.removeAttribute('style');
// 	} else {
// 		console.log(filterType);
// 		const symbol = filters[filterType].symbol;
// 		filterImage.style.filter = `${filterType}(${current}${symbol})`;
// 	}
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
