// How TO - Copy Text to Clipboard =>  https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// #region Start  Weight Converter functionality
// Caching the needed Dom Elements

const passwordGeneratorForm = window.document.querySelector(
	'.password-generator-form'
);
const btnClipboard = window.document.querySelector('.btn-clipboard');

const passwordInput = passwordGeneratorForm.password;
const passwordLengthInput = passwordGeneratorForm.passwordLength;

const passwordcheckboxes = passwordGeneratorForm.passwordType;

const passwordCollections = {
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	numbers: '0123456789',
	symbols: '@-&_$#',
};

btnClipboard.addEventListener('click', () => {
	const password = passwordInput.value;
	passwordInput.select();

	window.navigator.clipboard.writeText(password);
});

passwordGeneratorForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const passwordLength = Number(passwordLengthInput.value);

	if (passwordLength > 30 || passwordLength < 4) {
		alert('Please insert a valid password lenght between: 4 -> 30');
		passwordLengthInput.value = 10;
		return;
	}

	const passwortArrayTypes = [];
	passwordcheckboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			passwortArrayTypes.push(checkbox.value);
		}
		// console.log(checkbox.value, ' => ', checkbox.checked);
	});

	if (passwortArrayTypes.length === 0) {
		alert('Please check password types');
		return;
	}
	generatePassword(passwordLength, passwortArrayTypes);
});

function generatePassword(passwordLength, passwortArrayTypes) {
	// console.log(passwortArrayTypes);
	// console.log(passwordLength);

	let passwordWords = '';
	passwortArrayTypes.forEach((type) => {
		passwordWords += passwordCollections[type];
	});

	// const passwordWords = passwortArrayTypes.reduce((word, type) => {
	// 	return word + passwordCollections[type];
	// }, '');

	// console.log(passwordWords);

	let newPassword = '';
	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * passwordWords.length);
		const randomCharacter = passwordWords[randomIndex];
		newPassword += randomCharacter;
	}
	window.console.log(newPassword);

	passwordInput.value = newPassword;
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
