

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
