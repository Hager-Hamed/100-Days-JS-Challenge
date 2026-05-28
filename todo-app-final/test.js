// const numbers = [55, 77, 22, 99, 11, 33];
// const numbersLenght = numbers.length;

// // for (let i = 0; i < numbersLenght; i++) {
// // 	numbers.pop();
// // }

// numbers.splice(0, numbers.length);
// console.log(numbers);

// function arrayFromRange(num1, num2) {
// 	const arr = [];
// 	for (let i = num1; i <= num2; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// console.log(arrayFromRange(-10, -14));

// function includes(arr, num) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === num) return true;
// 	}
// 	return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 6));

const movies = [
	{ title: 'a', year: 2018, rating: 4.5 },
	{ title: 'b', year: 2018, rating: 4.7 },
	{ title: 'c', year: 2018, rating: 3 },
	{ title: 'd', year: 2017, rating: 4.5 },
];
console.log(
	movies
		.filter((m) => m.year === 2018 && m.rating > 4)
		// .sort((a, b) => b.title.localeCompare(a.title)
		// a.description.localeCompare(b.description))
		.sort((a, b) => b.rating - a.rating)
		.map((m) => m.title)
);
