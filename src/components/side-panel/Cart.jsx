import React from "react";

function Cart({ isSidePanelOpen, toggleSidePanel, totalProduct }) {
	return (
		<div
			className={`cart-icon ${isSidePanelOpen && "cart-icon-heading"}`}
			onClick={() => toggleSidePanel()}
		>
			<img src="/images/cart.png" alt="cart" />
			<span className="prod-count">{totalProduct}</span>
		</div>
	);
}

export default Cart;
