export function sortArray(array) {
  array.sort((a, b) => b.health - a.health);
	console.log(array);
	return array;
}