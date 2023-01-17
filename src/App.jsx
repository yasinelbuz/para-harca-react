import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Basket from "./Components/Basket";
import ProductList from "./Data/ProductList.json";

export default function App() {
	//states
	const [money, setMoney] = useState(1500000000);
	const [products, setProduct] = useState(ProductList);
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		let totalSpendMoney = basket.reduce((sum, current, index) => {
			return (
				sum +
				current.amount *
					products.filter((item) => item.id === current.id)[0]?.price
			);
		}, 0);
		let result = 15000000000 - totalSpendMoney;
		setMoney(result);
	}, [basket]);

	return (
		<div className="container mx-auto">
			<Header money={money} />

			<div className="grid md:m-0 md:my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						setBasket={setBasket}
						basket={basket}
						money={money}
					/>
				))}
			</div>

			<Basket
				basket={basket}
				products={products}
				money={money}
				setBasket={setBasket}
			/>
		</div>
	);
}
