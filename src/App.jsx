import "./App.css";
import Baller from "./Baller";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
	function handleClick() {
		alert("Button is Clicked!");
	}

	const handleClick3 = () => {
		alert("Clicked Button 3");
	};

	const handleAdd5 = (num) => {
		const newNum = num + 5;
		alert(newNum);
	};

	return (
		<>
			<h1>React Core Concepts Part 2</h1>
      <Baller></Baller>
      <Batsman></Batsman>
      <Counter></Counter>

			{/* <button onclick="handleClick()">CLick Me</button> */}
			<button onClick={handleClick}>Click Me</button>
			<button
				onClick={function handleClick2() {
					alert("Clicked Button 2");
				}}>
				Click Me 2
			</button>
			<button onClick={handleClick3}>Click Me 3</button>
			<button onClick={() => alert("Clicked Button 4")}>Click Me 4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
		</>
	);
}

export default App;
