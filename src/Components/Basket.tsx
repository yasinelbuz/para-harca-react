import React from "react";

type PropTypes = {
    children?: JSX.Element
    basket?: Array<object> | undefined;
    products?: object | undefined;
    money?: number,
	 setBasket : Function,
}

export default function Basket(props:PropTypes) {
	const { basket, products, money, setBasket } = { ...props };
	return (
		<div className="bg-white mb-8 p-8 flex flex-col items-center">
			<h1 className="font-bold text-lg mb-8">Your Receipt</h1>
			<table className="w-[400px]">
				{basket?.map((item, key) => (
					<tr className="border-b-4" key={key}>
						<td className="p-4">
							{
								products?.find(
									(current) => current.id === item?.id
								).title
							}
						</td>
						<td className="p-4">{item?.amount}</td>
						<td className="p-4 text-green-500 text-right">
							$
							{
								products.find(
									(current) => current.id === item.id
								).price
							}
						</td>
					</tr>
				))}
				<tr className="text-left">
					<th className="px-4 w-[100%]">TOTAL</th>
					<th className="px-4 w-[100%]"></th>
					<th className="px-4 text-green-500 text-right">{money}</th>
				</tr>
			</table>
			<button
				className="bg-gray-200 px-4 py-2 rounded-sm mt-8"
				onClick={() => setBasket([])}
			>
				Reset Basket
			</button>
		</div>
	);
}
