import isUserAgent from "../.internal/isUserAgent";
/**
 * 检查是否为Opera
 *
 * @since 0.0.1
 * @memberof  Platform
 * @returns {boolean}
 * @example
 *
 * isOpera()
 * // 如果是
 * // => true
 *
 */
export default function isOpera(): boolean {
	return isUserAgent("Opera");
}
