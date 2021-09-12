import React, { useState } from "react";

function Sushi({ item, totalCost, spent }) {
	const [eatenToggle, setEatenToggle] = useState(false);

	function handleEaten() {
		if (spent + item.price <= 100 && eatenToggle === false) {
			setEatenToggle(true);
			totalCost(item.price);
		}
	}
	//console.log(moneyCounter);
	return (
		<div className="sushi">
			<div className="plate" onClick={handleEaten}>
				{/* Tell me if this sushi has been eaten! */}
				{eatenToggle ? null : (
					<img
						src={item.img_url}
						alt={(item.name, "Sushi")}
						width="100%"
					/>
				)}
			</div>
			<h4 className="sushi-details">
				{item.name} - ${item.price}
			</h4>
		</div>
	);
}

export default Sushi;
