import React from "react";

function SingleCartProduct({ product }) {
	return (
		<>
			<div className="img-info">
				<img className="cart-product-img" src={product.image} alt="cart_prod_img" />
				<div className="prod-info">
					<span>{product.name}</span>
					<br />
					<span>{product.size}</span> | <span>{product.des}</span>
					<br />
					<span>Quantity: {1}</span>
				</div>
			</div>
			<div className="prod-cal">
				<span className="d-inline-block pb-1">X</span>
				<br />
				<span className="d-inline-block pb-2">${product.price}</span>
				<br />
				<div>
					<button> - </button>
					<button> + </button>
				</div>
			</div>
		</>
	);
}

export default SingleCartProduct;
