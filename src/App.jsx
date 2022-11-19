import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Basket from "./Components/Basket";
import ProductList from "./ProductList.json";

export default function App() {
	const [products, SetProduct] = useState(ProductList);

	return (
		<div className="container mx-auto">
			<Header />
			<Product products={products} />
			<Basket />
		</div>
	);
}
