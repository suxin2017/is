/**
 * 检查当前环境是不是浏览器环境
 *
 * @since 0.0.1
 * @category lang
 * @memberof Type
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isBrowser()
 * // 如果 window 存在表示大概率是浏览器环境
 * // => true
 *
 */
function isBrowser(): boolean {
	try {
		return !!window;
	} catch (error) {
		return false;
	}
}

export default isBrowser;
