import React from "react";
import SingleProduct from "./SingleProduct";

function Products({ data, setProductToCart }) {
	return (
		<div className="container">
			<div className="row">
				<p className="py-4">{data.length} product(s) found.</p>
				{data.map((product) => (
					<SingleProduct
						key={product.id}
						product={product}
						setProductToCart={setProductToCart}
					/>
				))}
			</div>
		</div>
	);
}

export default Products;
