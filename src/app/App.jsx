import React, { Component } from "react";
import "./App.css";
import { products } from "../data/data";
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";

class App extends Component {
	state = {
		data: [
			{
				id: "s3kk-987",
				name: "Batman T-shirt",
				price: 23.9,
				size: "XL",
				image: "/images/batman-t-shirt.webp",
				flipImage: "/images/batman-t-shirt-flip.webp",
			},
		],
		isLoading: true,
	};

	componentDidMount() {
		const data = [...this.state.data, ...products];
		this.setState({ data, isLoading: false });
	}

	render() {
		return (
			<>
				<Navbar />
				{this.state.isLoading ? <Loading /> : <Products data={this.state.data} />}
			</>
		);
	}
}

export default App;
