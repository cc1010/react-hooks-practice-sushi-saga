import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ list, totalCost, spent }) {
	console.log(list.length);
	const [listPosition, setListPosition] = useState(0);
	function morePosition() {
		setListPosition(listPosition + 4);
	}
	console.log(listPosition);

	return (
		<div className="belt">
			{/* Render Sushi components here! */}
			{list.slice(listPosition, listPosition + 4).map((item) => {
				return (
					<Sushi
						key={item.id}
						item={item}
						totalCost={totalCost}
						spent={spent}
					/>
				);
			})}
			<MoreButton
				morePosition={morePosition}
				listLength={list.length}
				currentPosition={listPosition}
			/>
		</div>
	);
}

export default SushiContainer;
