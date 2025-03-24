import { Suspense } from "react";
import "./App.css";
import Baller from "./Baller";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

// const fetchFriends = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	return res.json();
// }

const fetchPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

function App() {
	// const friendsPromise = fetchFriends();

	const postsPromise = fetchPosts();

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
			{/* <Players></Players> */}

			{/* <Suspense fallback={<h3>Loading...</h3>}>
				<Users fetchUsers={fetchUsers}></Users>
			</Suspense> */}
			{/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
				<Friends friendsPromise={friendsPromise}></Friends>
			</Suspense> */}

			<Suspense fallback={<h2>Posts are Coming...</h2>}>
				<Posts postsPromise={postsPromise}></Posts>
			</Suspense>

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
