import isUserAgent from "../.internal/isUserAgent";
/**
 * 检查是否为Firefox
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isFirefox()
 * // 如果是
 * // => true
 *
 */
export default function isFirefox(): boolean {
	return isUserAgent("Firefox");
}
