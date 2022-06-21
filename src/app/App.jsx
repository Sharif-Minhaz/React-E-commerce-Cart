import React, { Component } from "react";
import "./App.css";
import { products } from "../data/data";
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
import SidePanel from "../components/side-panel/SidePanel";
import Products from "../components/products/Products";

class App extends Component {
	state = {
		data: [],
		isLoading: true,
		category: ["M", "L", "XL", "XXL"],
		cartsProduct: [],
		isSidePanelOpen: false,
	};

	componentDidMount() {
		this.setState({ data: products, isLoading: false });
	}

	toggleSidePanel = () => {
		this.setState({ isSidePanelOpen: !this.state.isSidePanelOpen });
	};

	handleSizes = (size) => {
		if (this.state.category.includes(size)) {
			const currCategory = this.state.category.filter((cat) => cat !== size);
			this.setState({ category: currCategory });
			this.getFilteredProduct(this.state.category);
		} else {
			this.setState({ category: [...this.state.category, size] });
			this.getFilteredProduct(this.state.category);
		}
	};

	componentDidUpdate() {
		console.log(this.state.category);
	}

	getFilteredProduct = (size) => {
		// array
		const data = this.state.data.filter((prod) => size.includes(prod.size));
		this.setState({ data });
	};

	setProductToCart = (prodId) => {
		const isPresent = this.state.cartsProduct.find((product) => product.id === prodId);
		if (typeof isPresent === "undefined") {
			const product = this.state.data.find((product) => product.id === prodId);
			this.setState({
				cartsProduct: [...this.state.cartsProduct, product],
				isSidePanelOpen: true,
			});
		} else {
			this.setState({ isSidePanelOpen: true });
			alert("Product already in cart.");
		}
	};

	removeProductFromCart = (prodId) => {
		const products = this.state.cartsProduct.filter((product) => product.id !== prodId);
		this.setState({ cartsProduct: products });
	};

	render() {
		return (
			<>
				<Navbar handleSizes={this.handleSizes} />
				<SidePanel
					cartsProduct={this.state.cartsProduct}
					isSidePanelOpen={this.state.isSidePanelOpen}
					toggleSidePanel={this.toggleSidePanel}
					removeProductFromCart={this.removeProductFromCart}
				/>
				{this.state.isLoading ? (
					<Loading />
				) : (
					<Products
						data={this.state.data}
						setProductToCart={this.setProductToCart}
						removeProductFromCart={this.removeProductFromCart}
					/>
				)}
			</>
		);
	}
}

export default App;
