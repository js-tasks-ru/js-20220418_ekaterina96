/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

	return function (product) {
		
		let array = path.split('.');
		let obj = {};
		Object.assign(obj, product);
		for (let prop of array) {
			obj = obj[prop];
			if (typeof(obj) === 'undefined') return undefined;
		}
		return obj;
	}
}
