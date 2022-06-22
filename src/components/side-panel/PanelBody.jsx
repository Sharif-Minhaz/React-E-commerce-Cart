import React, { Component } from "react";
import SingleCartProduct from "./SingleCartProduct";

class PanelBody extends Component {
	state = {
		sumOfProductsPrice: 0,
	};

	getAllPrices = () => {};

	// componentDidUpdate() {
	// 	this.props.handleOverallPrice(this.state.sumOfProductsPrice);
	// }

	render() {
		return (
			<div className="cart-product-body flex-column">
				{this.props.cartsProduct.map((product) => (
					<SingleCartProduct
						key={product.id}
						product={product}
						removeProductFromCart={this.props.removeProductFromCart}
					/>
				))}
			</div>
		);
	}
}

export default PanelBody;
