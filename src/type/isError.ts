import getTag from "../.internal/getTag";
import isObjectLike from "../like/isObjectLike";

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @since 0.0.1
 * @category Lan
 * @memberof Type
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value: any): value is Error {
	if (!isObjectLike(value)) {
		return false;
	}
	const tag = getTag(value);
	return (
		tag == "[object Error]" ||
		tag == "[object DOMException]" ||
		(typeof value.message === "string" && typeof value.name === "string")
	);
}

export default isError;
