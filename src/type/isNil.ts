/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @since 0.0.1
 * @category Lan
 * @memberof Typg
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
function isNil(value: any): value is null | undefined {
	return value == null;
}

export default isNil;
