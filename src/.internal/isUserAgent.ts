/**
 * 检测navigator.userAgent
 *
 * @private
 * @param {string} platform
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
export default function isUserAgent(platform: string): boolean {
	try {
		return (navigator?.userAgent?.indexOf(platform) || 0) === -1;
	} catch (e) {
		return false;
	}
}
