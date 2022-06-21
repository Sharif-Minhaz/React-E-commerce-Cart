import React from "react";
import CategoryBtn from "./CategoryBtn";

function Navbar({ handleSizes }) {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light sticky-top">
			<div className="container justify-content-between">
				<img src="/images/logo.png" width="145px" alt="logo" />
				<div className="">
					<ul className="navbar-nav me-auto mb-0">
						<li className="nav-item">
							<CategoryBtn handleSizes={handleSizes}>M</CategoryBtn>
						</li>
						<li className="nav-item">
							<CategoryBtn handleSizes={handleSizes}>L</CategoryBtn>
						</li>
						<li className="nav-item">
							<CategoryBtn handleSizes={handleSizes}>XL</CategoryBtn>
						</li>
						<li className="nav-item">
							<CategoryBtn handleSizes={handleSizes}>XXL</CategoryBtn>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
