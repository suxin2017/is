import isUserAgent from "../.internal/isUserAgent";
/**
 * 检查是否为Chromium
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isChromium()
 * // 如果是Chromiume
 * // => true
 *
 */
export default function isChromium(): boolean {
	return isUserAgent("Chromium");
}
