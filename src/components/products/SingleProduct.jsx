import React from "react";

function SingleProduct({ product }) {
	return (
		<div className="col-xl-3 col-md-4 col-12 mb-5">
			<img className="w-100" src={product.image} alt="profile_img" />
			<div className="position-relative">
				<p className="product-name">{product.name}</p>
			</div>
			<p className="text-center">
				<span className="bolding">$ {product.price}</span>
			</p>
			<button className="add-to-cart">Add to cart</button>
		</div>
	);
}

export default SingleProduct;
