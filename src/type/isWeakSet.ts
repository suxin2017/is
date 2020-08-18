import getTag from '../.internal/getTag.js'
import isObjectLike from './isObjectLike.js'

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @since 4.3.0
 * @category Lang
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
function isWeakSet<T extends object>(value:any):value is WeakSet<T> {
  return isObjectLike(value) && getTag(value) == '[object WeakSet]'
}

export default isWeakSet
