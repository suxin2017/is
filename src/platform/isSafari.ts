import isUserAgent from "../.internal/isUserAgent";
import isChrome from "./isChrome";
/**
 * 检查是否为Safari
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isSafari()
 * // 如果是
 * // => true
 *
 */
export default function isSafari(): boolean {
	return isUserAgent("Safari") && !isChrome();
}
