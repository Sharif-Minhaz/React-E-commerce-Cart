import React from "react";
import SingleCartProduct from "./SingleCartProduct";

function PanelBody({
	handleOverallPrice,
	removeProductFromCart,
	cartsProduct,
	setCountPrice,
}) {
	return (
		<div className="cart-product-body flex-column">
			{cartsProduct.map((product) => (
				<SingleCartProduct
					key={product.id}
					product={product}
					removeProductFromCart={removeProductFromCart}
					handleOverallPrice={handleOverallPrice}
					setCountPrice={setCountPrice}
				/>
			))}
		</div>
	);
}

export default PanelBody;
