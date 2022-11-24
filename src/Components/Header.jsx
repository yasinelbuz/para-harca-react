import React, { useState, useEffect } from "react";

export default function Header({ money }) {
	return (
		<div className="sticky top-0 bg-green-600 h-16 flex items-center justify-center font-bold text-2xl bg-gradient-to-b from-green-400">
			{money.toLocaleString()} TL
		</div>
	);
}
