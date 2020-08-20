/**
 * Checks if `value` is `undefined`.
 *
 * @since 0.0.1
 * @category Lan
 * * @memberof Typg
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined(value: any): value is undefined {
	return value === undefined;
}

export default isUndefined;
