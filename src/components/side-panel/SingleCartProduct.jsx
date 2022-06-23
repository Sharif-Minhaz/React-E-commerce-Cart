import React, { Component } from "react";

class SingleCartProduct extends Component {
	state = {
		quantity: 1,
		totalPrice: 0,
	};

	componentDidMount() {
		this.setState({
			totalPrice: this.props.product.price,
		});
	}

	handleDec = (prodId, price) => {
		this.state.quantity > 1 &&
			this.setState(
				{
					quantity: this.state.quantity - 1,
					totalPrice: Number((this.state.totalPrice - price).toFixed(2)),
				},
				() => this.props.setCountPrice(prodId, this.state.quantity, this.state.totalPrice)
			);
	};

	handleInc = (prodId, price) => {
		this.state.quantity < 10 &&
			this.setState(
				{
					quantity: this.state.quantity + 1,
					totalPrice: Number((this.state.totalPrice + price).toFixed(2)),
				},
				() => this.props.setCountPrice(prodId, this.state.quantity, this.state.totalPrice)
			);
	};

	render() {
		const { product, removeProductFromCart } = this.props;
		return (
			<div className="d-flex justify-content-between breaker">
				<div className="img-info">
					<img className="cart-product-img" src={product.image} alt="cart_prod_img" />
					<div className="prod-info">
						<span>{product.name}</span>
						<br />
						<span>{product.size}</span> | <span>{product.des}</span>
						<br />
						<span>Quantity: {this.state.quantity}</span>
					</div>
				</div>
				<div className="prod-cal">
					<span
						className="d-inline-block pb-1"
						onClick={() => removeProductFromCart(product.id)}
						title="Remove product from cart"
					>
						X
					</span>
					<br />
					<span className="d-inline-block pb-2 text-warning">
						${this.state.totalPrice}
					</span>
					<br />
					<div className="control-count">
						<button
							disabled={this.state.quantity > 1 ? false : true}
							onClick={() => this.handleDec(product.id, product.price)}
						>
							-
						</button>
						<button
							disabled={this.state.quantity < 10 ? false : true}
							onClick={() => this.handleInc(product.id, product.price)}
						>
							+
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleCartProduct;
