import React from "react";
import shortid from "shortid";
import SingleCartProduct from "./SingleCartProduct";

function PanelBody({ cartsProduct }) {
	return (
		<div className="cart-product-body">
			{cartsProduct.map((product) => (
				<SingleCartProduct key={shortid.generate()} product={product} />
			))}
		</div>
	);
}

export default PanelBody;
