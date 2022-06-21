import React, { Component } from "react";

class CategoryBtn extends Component {
	state = {
		isActive: true,
	};

	toggleState = () => {
		this.setState({ isActive: !this.state.isActive });
	};

	render() {
		return (
			<button
				className={this.state.isActive ? "active" : "btn-secondary"}
				onClick={() => {
					this.props.handleSizes(this.props.children);
					this.toggleState();
				}}
			>
				{this.props.children}
			</button>
		);
	}
}

export default CategoryBtn;
