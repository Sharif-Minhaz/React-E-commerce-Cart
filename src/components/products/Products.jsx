import React, { Component } from "react";
import shortid from "shortid";
import SingleProduct from "./SingleProduct";

function Products({ data }) {
	return (
		<div className="container">
			<div className="row">
				<p className="py-4">{8} product(s) found.</p>
				{data.map((product) => (
					<SingleProduct key={shortid.generate()} product={product} />
				))}
			</div>
		</div>
	);
}

export default Products;
