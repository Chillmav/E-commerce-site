export function priceFromCents(price) {
    return `$${(price / 100).toFixed(2)}`
}