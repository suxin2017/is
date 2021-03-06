import getTag from "../.internal/getTag";
import isObjectLike from "../like/isObjectLike";

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @memberof Type
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments(value: unknown): value is IArguments {
	return isObjectLike(value) && getTag(value) == "[object Arguments]";
}

export default isArguments;
