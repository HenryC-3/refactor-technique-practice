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
	// 阶段 1：计算数据
	const priceData = calculatePricingData(product, quantity, shippingMethod);

	// 阶段 2：计算价格
	const price = applyPrice(priceData);
	return price;
}

function calculatePricingData(product: Product, quantity: number, shippingMethod: ShippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0) *
		product.basePrice *
		product.discountRate;

	const priceData = { basePrice, shippingMethod, quantity, discount };
	return priceData;
}

function applyPrice(data: {
	basePrice: number;
	shippingMethod: ShippingMethod;
	quantity: number;
	discount: number;
}) {
	const { basePrice, shippingMethod, quantity, discount } = data
	const shippingPerCase =
		basePrice > shippingMethod.discountThreshold
			? shippingMethod.discountedFee
			: shippingMethod.feePerCase;
	const shippingCost = quantity * shippingPerCase;
	const price = basePrice - discount + shippingCost;
	return price;
}
