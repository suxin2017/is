/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @since 0.0.1
 * @category Lan
 * * @memberof Typg
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value: any): boolean {
	return typeof value === "function";
}

export default isFunction;
