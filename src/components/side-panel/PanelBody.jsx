import React, { Component } from "react";
import shortid from "shortid";
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
						key={shortid.generate()}
						product={product}
						removeProductFromCart={this.props.removeProductFromCart}
					/>
				))}
			</div>
		);
	}
}

export default PanelBody;
