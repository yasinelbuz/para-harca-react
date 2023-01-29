import React, { useState, useEffect } from "react";

type propsTypes = {
	children?: JSX.Element,
	product?: object,
	basket?: object[],
	setBasket?: Function,
	money?: number,
}

export default function Product(props:propsTypes) {
	//props destruction
	const { product, basket, setBasket, money } = { ...props };

	//which product how much buy product
	let productAmountTotal = basket!.find((item) => item.id === product!.id);

	const changeProductCount = (e) => {
		//is there product - check
		let isThereProduct = basket!.find((item) => item.id === product.id);

		//if buy buttonu cliked
		if (e.target.id == "increase") {
			//
			//increase amount
			if (isThereProduct) {
				//differnt variables because for setbasket
				const updateBasket = basket!.map((item) => {
					return item.id === product.id
						? { ...item, amount: item.amount + 1 }
						: item;
				});
				setBasket(() => updateBasket);
			} else {
				return setBasket([...basket, { id: product.id, amount: 1 }]);
			}
		} else {
			//decrease amount
			if (isThereProduct?.amount != 0) {
				const updateBasket = basket.map((item) => {
					return item.id === product.id
						? { ...item, amount: item.amount - 1 }
						: item;
				});
				setBasket(() => updateBasket);
			}
		}
	};

	return (
		<div className="bg-white px-16 pb-4 pt-12 flex flex-col items-center">
			<img
				src={product.imgSrc}
				className="w-full h-[200px] object-contain"
			/>
			<h2 className="font-bold text-2xl mt-4 text-[#444]">
				{product.title}
			</h2>
			<h3 className="font-bold text-lg text-green-600">
				{product.price.toLocaleString()} TL
			</h3>
			<div className="mt-4 flex">
				<button
					className="flex-shrink-0 disabled:bg-gray-200 disabled:from-gray-200 disabled:text-black bg-red-600 bg-gradient-to-t from-purple-600 text-white rounded-md px-10 py-2"
					onClick={(e) => changeProductCount(e)}
					id="decrease"
					disabled={!productAmountTotal?.amount}
				>
					Sell
				</button>
				<input
					type="text"
					value={productAmountTotal?.amount || 0}
					disabled={true}
					className="w-full sm:w-[100px] md:w-[100px] lg:w-[80px] xl:w-[120px]  rounded-md text-center outline-none focus:border-blue-900 focus:border-2 border border-gray-200 flex-grow mx-2"
				/>
				<button
					className="flex-shrink-0 disabled:bg-gray-200 disabled:from-gray-200 disabled:text-black bg-green-600 bg-gradient-to-t from-green-800 text-white rounded-md px-10 py-2"
					onClick={(e) => changeProductCount(e)}
					id="increase"
					disabled={money < product.price}
				>
					Buy
				</button>
			</div>
		</div>
	);
}
