export function formatPrice(num) {
	return  "$" + (Math.round(num * 100) / 100)
}