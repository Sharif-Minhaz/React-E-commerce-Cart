import React, { Component } from "react";
import Cart from "./Cart";
import ClosePanel from "./ClosePanel";

class SidePanel extends Component {
	state = {
		isSidePanelOpen: false,
		cartsProduct: [],
	};

	toggleSidePanel = () => {
		this.setState({ isSidePanelOpen: !this.state.isSidePanelOpen });
	};

	render() {
		const { isSidePanelOpen } = this.state;
		return (
			<div className={isSidePanelOpen ? "side-panel" : "side-panel side-panel-close"}>
				{/*--------------------- Cart component start ----------------------*/}
				<Cart
					isSidePanelOpen={this.state.isSidePanelOpen}
					toggleSidePanel={this.toggleSidePanel}
					totalProduct={this.state.cartsProduct.length}
				/>
				{isSidePanelOpen && (
					<ClosePanel
						isSidePanelOpen={this.state.isSidePanelOpen}
						toggleSidePanel={this.toggleSidePanel}
					/>
				)}
				{/*--------------------- Cart component end ----------------------*/}
				<div className="panel-header text-light text-center p-4 ms-5">Cart</div>
				<div className="panel-body text-light text-center p-4">
					add some products in the cart :)
				</div>
				<div className="panel-footer p-4">
					<p className="d-flex justify-content-between mb-4">
						<span className="text-light text-uppercase">subtotal</span>
						<span className="text-warning">{"$200"}</span>
					</p>
					<button className="checkout-btn">Checkout</button>
				</div>
			</div>
		);
	}
}

export default SidePanel;
