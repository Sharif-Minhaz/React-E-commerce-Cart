import React, { Component } from "react";
import Cart from "./Cart";
import ClosePanel from "./ClosePanel";
import PanelBody from "./PanelBody";

class SidePanel extends Component {
	state = {
		overallPrice: 1,
	};

	handleOverallPrice = (price) => {
		this.setState({ overallPrice: price });
	};

	render() {
		const { isSidePanelOpen } = this.props;
		return (
			<div className={isSidePanelOpen ? "side-panel" : "side-panel side-panel-close"}>
				{/*--------------------- Cart component start ----------------------*/}
				<Cart
					isSidePanelOpen={isSidePanelOpen}
					toggleSidePanel={this.props.toggleSidePanel}
					totalProduct={this.props.cartsProduct.length}
				/>
				{isSidePanelOpen && (
					<ClosePanel
						isSidePanelOpen={isSidePanelOpen}
						toggleSidePanel={this.props.toggleSidePanel}
					/>
				)}
				{/*--------------------- Cart component end ----------------------*/}
				<div className="panel-header text-light text-center py-4 ms-4">Cart</div>
				<div className="panel-body text-light text-center p-3">
					{this.props.cartsProduct.length === 0 && "add some products in the cart :)"}
					{/*------------ panel body component start -------------------*/}
					<PanelBody
						cartsProduct={this.props.cartsProduct}
						handleOverallPrice={this.handleOverallPrice}
						removeProductFromCart={this.props.removeProductFromCart}
					/>
					{/*------------- panel body component stop -------------------*/}
				</div>
				<div className="panel-footer p-3">
					<p className="d-flex justify-content-between mb-4">
						<span className="text-light text-uppercase">subtotal</span>
						<span className="text-warning">${this.state.overallPrice}</span>
					</p>
					<button
						className="checkout-btn"
						onClick={() => alert(`Checkout - Subtotal: $ ${this.state.overallPrice}`)}
					>
						Checkout
					</button>
				</div>
			</div>
		);
	}
}

export default SidePanel;
