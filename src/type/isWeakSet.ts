import getTag from "../.internal/getTag.js";
import isObjectLike from "../like/isObjectLike.js";

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @since 0.0.1
 * @category Lan
 * * @memberof Typg
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * isWeakSet(new WeakSet)
 * // => true
 *
 * isWeakSet(new Set)
 * // => false
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isWeakSet(value: any): value is WeakSet<any> {
	return isObjectLike(value) && getTag(value) == "[object WeakSet]";
}

export default isWeakSet;
