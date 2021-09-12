import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
	const [count, setCount] = useState(0);
	const [sushiList, setSushiList] = useState([]);
	const [sushiCost, setSushiCost] = useState([]);

	function totalCost(price) {
		setSushiCost([...sushiCost, price]);
		setCount(count + price);
	}
	// GET
	useEffect(() => {
		fetch(API)
			.then((resp) => resp.json())
			.then((data) => setSushiList(data));
	}, []);
	//console.log(sushiList);
	return (
		<div className="app">
			<SushiContainer
				list={sushiList}
				totalCost={totalCost}
				spent={count}
			/>
			<Table plates={sushiCost} spent={count} />
		</div>
	);
}

export default App;
