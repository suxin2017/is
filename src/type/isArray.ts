import isObject from "./isObject";

/**
 * @since 0.0.1
 * @category type
 * @param {*} value 
 * @return {boolean}
 * @example
 *  
 * isArray([])
 * // => true
 * 
 * isArray(1)
 * // => false
 */
function isArray(value:any):value is any[]{
	return isObject(value)&& Array.isArray(value);
}
export default isArray;
