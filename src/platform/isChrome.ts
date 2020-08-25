import isUserAgent from "../.internal/isUserAgent";
/**
 * 检查是否为chrome
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isChrome()
 * // 如果是CHrome
 * // => true
 *
 */
export default function isChrome(): boolean {
	return isUserAgent("Chrome");
}
