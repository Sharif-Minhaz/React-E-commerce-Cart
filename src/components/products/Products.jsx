import React from "react";
import shortid from "shortid";
import SingleProduct from "./SingleProduct";

function Products({ data, setProductToCart }) {
	return (
		<div className="container">
			<div className="row">
				<p className="py-4">{8} product(s) found.</p>
				{data.map((product) => (
					<SingleProduct
						key={shortid.generate()}
						product={product}
						setProductToCart={setProductToCart}
					/>
				))}
			</div>
		</div>
	);
}

export default Products;
