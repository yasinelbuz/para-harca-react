import React, { useState, useEffect } from "react";

export default function Product({ products }) {
	return (
		<div className="grid md:m-0 md:my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
			{products.map((product) => (
				<div className="bg-white px-16 pb-4 pt-12 flex flex-col items-center">
					<img
						src={product.imgSrc}
						alt=""
						className="w-full h-[200px] object-contain"
					/>
					<h2 className="font-bold text-2xl mt-4 text-[#444]">
						{product.title}
					</h2>
					<h3 className="font-bold text-lg text-green-600">
						{product.price} TL
					</h3>
					<div className="mt-4 flex">
						<button
							className="disabled:bg-gray-200 disabled:from-gray-200 disabled:text-black bg-red-600 bg-gradient-to-t from-purple-600 text-white rounded-md px-10 py-2"
							disabled={true}
						>
							Sell
						</button>
						<input
							type="text"
							value="0"
							className="rounded-md text-center outline-none focus:border-blue-900 focus:border-2 border border-gray-200 flex-grow mx-2 w-full"
						/>
						<button
							className="disabled:bg-gray-200 disabled:from-gray-200 disabled:text-black bg-green-600 bg-gradient-to-t from-green-800 text-white rounded-md px-10 py-2"
							disabled={true}
						>
							Buy
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
