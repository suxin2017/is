import isObject from "../type/isObject";
import isArray from "../type/isArray";

/**
 * 检测两个类型是否形状相似
 *
 * @since 0.0.1
 * @memberof Like
 * @category Lang
 * @param {*} shape
 * @param {*} target
 * @returns {boolean}
 * @example
 *
 * isShapeLike(1,2)
 * // => true
 *
 * isShapeLike({a:123},{a:456})
 * // => true
 *
 * isShapeLike(["123",123],["string",567])
 * // => true
 *
 */
function isShapeLike(shape: any, value: any): boolean {
	if (isObject(shape) || isArray(shape)) {
		if (typeof shape !== typeof value) {
			return false;
		}
		for (const key in shape) {
			if (typeof shape[key] !== typeof value[key]) {
				return false;
			}
		}
		return true;
	}
	return typeof shape === typeof value;
}

export default isShapeLike;
