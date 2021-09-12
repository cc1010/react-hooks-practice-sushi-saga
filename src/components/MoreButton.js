import React from "react";

function MoreButton({ morePosition, listLength, currentPosition }) {
	return currentPosition < listLength ? (
		<button onClick={morePosition}>More sushi!</button>
	) : null;
}
export default MoreButton;
