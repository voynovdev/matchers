import { sortArray } from "../sortArray";

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
	expect(result).toEqual(arrayExpected);
})