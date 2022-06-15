import React from "react";

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand navbar-light bg-light sticky-top">
			<div className="container justify-content-between">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<div className="">
					<ul className="navbar-nav me-auto mb-0">
						<li className="nav-item">
							<button>M</button>
						</li>
						<li className="nav-item">
							<button>L</button>
						</li>
						<li className="nav-item">
							<button>XL</button>
						</li>
						<li className="nav-item">
							<button>XXL</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
