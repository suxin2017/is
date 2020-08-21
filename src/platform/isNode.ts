/**
 * 检查当前环境是不是Node环境
 *
 * @since 0.0.1
 * @category lang
 * @memberof Type
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isBrowser()
 * // 如果 global 存在表示大概率是Node环境
 * // => true
 *
 */
function isNode(): boolean {
	try {
		return !!global;
	} catch (error) {
		return false;
	}
}

export default isNode;
