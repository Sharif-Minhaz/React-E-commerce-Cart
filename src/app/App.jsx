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
		cartsProduct: [
			{
				id: "s3kk-987",
				name: "Batman T-shirt",
				des: "Really Cool T-shirt",
				price: 23.9,
				size: "XL",
				image: "/images/batman-t-shirt.webp",
				flipImage: "/images/batman-t-shirt-flip.webp",
			},
		],
	};

	componentDidMount() {
		this.setState({ data: products, isLoading: false });
	}

	setProductToCart = (prodId) => {};

	render() {
		return (
			<>
				<Navbar />
				<SidePanel cartsProduct={this.state.cartsProduct} />
				{this.state.isLoading ? (
					<Loading />
				) : (
					<Products data={this.state.data} setProductToCart={this.setProductToCart} />
				)}
			</>
		);
	}
}

export default App;
