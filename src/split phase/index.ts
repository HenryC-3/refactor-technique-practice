interface Product {
	basePrice: number;
	discountThreshold: number;
	discountRate: number;
}

interface ShippingMethod {
	discountThreshold: number;
	discountedFee: number;
	feePerCase: number;
}
function priceOrder(
	product: Product,
	quantity: number,
	shippingMethod: ShippingMethod
) {
	// 阶段 1
	const basePrice = product.basePrice * quantity;
	const discount =
		Math.max(quantity - product.discountThreshold, 0) *
		product.basePrice *
		product.discountRate;

	// 阶段 2
	const price = applyPrice(basePrice, shippingMethod, quantity, discount);
	return price;
}
function applyPrice(basePrice: number, shippingMethod: ShippingMethod, quantity: number, discount: number) {
	const shippingPerCase = basePrice > shippingMethod.discountThreshold
		? shippingMethod.discountedFee
		: shippingMethod.feePerCase;
	const shippingCost = quantity * shippingPerCase;
	const price = basePrice - discount + shippingCost;
	return price;
}

