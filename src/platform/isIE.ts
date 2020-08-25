import isUserAgent from "../.internal/isUserAgent";
/**
 * 检查是否为IE
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isIE()
 * // 如果是
 * // => true
 *
 */
export default function isIE(): boolean {
	return isUserAgent("MSIE") || isUserAgent("Trident");
}
