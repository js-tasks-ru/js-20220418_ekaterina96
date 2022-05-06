/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

	if (size === 0) return '';
	if (typeof(size) === "undefined") return string;
	let newString = '';
	for (let i = 0; i < string.length; i++) {
		newString += string[i];
		for (let n = i + 1; n <= string.length; n++) {
			if (string[n] === string[i]) {
				if (n - i <= size - 1) {
					newString += string[n];
				}
      	
			} else {
				i = n - 1;
				break;
			}
		}
	}
	
	return newString;
}
