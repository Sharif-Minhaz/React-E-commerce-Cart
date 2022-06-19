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
	};

	componentDidMount() {
		this.setState({ data: products, isLoading: false });
	}

	render() {
		return (
			<>
				<Navbar />
				<SidePanel />
				{this.state.isLoading ? <Loading /> : <Products data={this.state.data} />}
			</>
		);
	}
}

export default App;
