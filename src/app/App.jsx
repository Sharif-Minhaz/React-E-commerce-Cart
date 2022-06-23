import React, { Component } from "react";
import "./App.css";
import { products } from "../data/data";
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
import SidePanel from "../components/side-panel/SidePanel";
import Products from "../components/products/Products";

class App extends Component {
	state = {
		cachedData: [...products],
		data: [],
		isLoading: true,
		category: ["M", "L", "XL", "XXL"],
		cartsProduct: [],
		checkoutPrice: 0,
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
			this.getFilteredProduct(currCategory);
		} else {
			this.setState({ category: [size, ...this.state.category] }, () =>
				this.getFilteredProduct(this.state.category)
			);
		}
	};

	getFilteredProduct = (categories) => {
		const data = this.state.cachedData.filter((prod) => categories.includes(prod.size));
		this.setState({ data });
	};

	setProductToCart = (prodId) => {
		const isPresent = this.state.cartsProduct.find((product) => product.id === prodId);
		if (typeof isPresent === "undefined") {
			const product = this.state.data.find((product) => product.id === prodId);
			// add count and totalPrice value property with default value
			product.count = 1;
			product.totalPrice = product.price;
			this.setState(
				{
					cartsProduct: [...this.state.cartsProduct, product],
					isSidePanelOpen: true,
				},
				() => this.setCheckoutPrice()
			);
		} else {
			this.setState({ isSidePanelOpen: true });
			alert("Product already in cart.");
		}
	};

	setCheckoutPrice = () => {
		let prices = [];
		this.state.cartsProduct.forEach((prod) => {
			prices.push(prod.totalPrice);
		});
		this.setState({
			checkoutPrice: Number(prices.reduce((prev, curr) => prev + curr).toFixed(2)),
		});
	};

	setCountPrice = (prodId, count, totalPrice) => {
		const product = this.state.cartsProduct.find((prod) => prod.id === prodId);
		if (typeof product !== "undefined") {
			product.count = count;
			product.totalPrice = totalPrice;
		}
		// empty re-render for updating changes
		this.setState({ cartsProduct: this.state.cartsProduct }, () => this.setCheckoutPrice());
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
					setCountPrice={this.setCountPrice}
					checkoutPrice={this.state.checkoutPrice}
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
