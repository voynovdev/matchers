import { sortArray } from "../sortArray";

// eslint-disable-next-line
test("Check sort array", () => {
	const array = [
		{name: 'мечник', health: 10},
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
	];
	const arrayExpected = [
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
		{name: 'мечник', health: 10}		
	];
	const result = sortArray(array);
	// eslint-disable-next-line
	expect(result).toEqual(arrayExpected);
})