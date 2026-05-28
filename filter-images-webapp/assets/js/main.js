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

let filterAdjust = window.document.querySelector('.filter__adjust');
let filterMinValue = window.document.querySelector('.filter__min-value');
let filterMaxValue = window.document.querySelector('.filter__max-value');
let filterRange = window.document.querySelector('.filter__range');
let filterCurrentValue = window.document.querySelector(
	'.filter__current-value'
);

const filters = {
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

let filterType = null;
let currentValue = null;
// filterImage.style.filter = 'contrast(200%)';
// filterImage.style.filter = `${filterType}(${current}${filterUnit})`;

filterSelect.addEventListener('change', () => {
	const selectedFilterType = filterSelect.value;
	filterType = selectedFilterType;

	if (selectedFilterType !== 'none') {
		filterAdjust.classList.remove('d-none');
		setFilter();
	} else {
		filterAdjust.classList.add('d-none');
		filterImage.style.filter = 'none';
	}
});

function setFilter() {
	const { symbol, min, max, initial, step } = filters[filterType];

	// console.log(symbol, min, max, initial, step);

	filterMinValue.textContent = `${min}${symbol}`;
	filterMaxValue.textContent = `${max}${symbol}`;
	filterCurrentValue.textContent = `${initial}${symbol}`;

	filterRange.min = min;
	filterRange.max = max;
	filterRange.value = initial;
	filterRange.step = step;

	currentValue = initial;

	applyFilter();
}

function applyFilter() {
	const filterUnit = filters[filterType].symbol;
	// console.log(filterUnit);
	filterCurrentValue.textContent = `${currentValue}${filterUnit}`;

	filterImage.style.filter = `${filterType}(${currentValue}${filterUnit})`;
}

filterRange.addEventListener('change', () => {
	// console.log(filterRange.value);
	currentValue = filterRange.value;
	applyFilter();
});

fileInput.addEventListener('change', () => {
	const imageInfo = fileInput.files[0];

	const reader = new FileReader();

	reader.addEventListener('load', () => {
		filterImage.src = reader.result;
	});

	if (imageInfo) {
		reader.readAsDataURL(imageInfo);
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
