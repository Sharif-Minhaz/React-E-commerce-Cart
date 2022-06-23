import React from "react";
import Cart from "./Cart";
import ClosePanel from "./ClosePanel";
import PanelBody from "./PanelBody";

function SidePanel({
	isSidePanelOpen,
	toggleSidePanel,
	cartsProduct,
	removeProductFromCart,
	setCountPrice,
	checkoutPrice,
}) {
	return (
		<div className={isSidePanelOpen ? "side-panel" : "side-panel side-panel-close"}>
			{/*--------------------- Cart component start ----------------------*/}
			<Cart
				isSidePanelOpen={isSidePanelOpen}
				toggleSidePanel={toggleSidePanel}
				totalProduct={cartsProduct.length}
			/>
			{isSidePanelOpen && (
				<ClosePanel isSidePanelOpen={isSidePanelOpen} toggleSidePanel={toggleSidePanel} />
			)}
			{/*--------------------- Cart component end ----------------------*/}
			<div className="panel-header text-light text-center py-4 ms-4">Cart</div>
			<p className="text-center text-light">
				{cartsProduct.length === 0 && "Add some products in the cart :)"}
			</p>
			<div className="panel-body text-light text-center p-3">
				{/*------------ panel body component start -------------------*/}
				<PanelBody
					cartsProduct={cartsProduct}
					removeProductFromCart={removeProductFromCart}
					setCountPrice={setCountPrice}
				/>
				{/*------------- panel body component stop -------------------*/}
			</div>
			<div className="panel-footer p-3">
				<p className="d-flex justify-content-between mb-4">
					<span className="text-light text-uppercase">subtotal</span>
					<span className="text-warning">${checkoutPrice}</span>
				</p>
				<button
					className="checkout-btn"
					onClick={() =>
						checkoutPrice > 0
							? alert(`Checkout - Subtotal: $${checkoutPrice}`)
							: alert("First add some product(s) into the cart to checkout :)")
					}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}

export default SidePanel;
