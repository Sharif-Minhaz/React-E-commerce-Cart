import React from "react";

function SingleProduct({ product, setProductToCart }) {
	return (
		<div className="col-xl-3 col-md-4 col-12 mb-5 single-product-card">
			<img className="w-100" src={product.image} alt="profile_img" />
			<img className="w-100" src={product.flipImage} alt="profile_img" />
			<div className="position-relative pt-3">
				<p className="product-name">{product.name}</p>
			</div>
			<p className="text-center">
				<span className="bolding">$ {product.price}</span>
			</p>
			<button className="add-to-cart" onClick={() => setProductToCart(product.id)}>
				Add to cart
			</button>
		</div>
	);
}

export default SingleProduct;
