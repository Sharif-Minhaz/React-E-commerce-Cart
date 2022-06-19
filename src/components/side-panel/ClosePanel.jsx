import React from "react";

function ClosePanel({ toggleSidePanel }) {
	return (
		<div className="cart-icon cart-close text-light" onClick={() => toggleSidePanel()}>
			<span>X</span>
		</div>
	);
}

export default ClosePanel;
