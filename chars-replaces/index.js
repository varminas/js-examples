const replaceAt = (input, index, replacement) => {
	if (index > input.length - 1) {
		return input;
	}

	return input.substr(0, index) + replacement + input.substr(index + 1);
}

const existReplacement = (input, symbol) => {
	for (let i = 0; i < input.length; i++) {
		const letter = input.charAt(i);
		if (letter === symbol) {
			return true;
		}
	}

	return false;
}

console.log('Chars replacer STARTED');

let input = 'SELECT ?, * FROM table1 where a = \'?\' and b = \'?\'';
const replacers = ['name1', 'V11', '43'];
const symbol = '?';

console.log('Input string', input);
console.log('Symbols', symbol, 'will be replaced with', replacers);

let count = 0;
while (existReplacement(input, symbol)) {
	for (let i = 0; i < input.length; i++) {
		const letter = input.charAt(i);
		if (letter === symbol) {

			input = replaceAt(input, i, replacers[count]);
			count++;
		}
	}
}

console.log('Chars replacer ENDED');
console.log('Replaced string:', input);