import getTag from "../.internal/getTag.js";
import isObjectLike from "../like/isObjectLike.js";

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @since 0.0.1
 * @category Lan
 * @memberof Typg
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isWeakMap(value: any): value is WeakSet<any> {
	return isObjectLike(value) && getTag(value) == "[object WeakMap]";
}

export default isWeakMap;
